import { isDefinition, isParent, type TypeGuard } from '@accuser/mdast-util-type-guards';
import type { Node } from 'mdast';

const collect = <T extends Node>(tree: Node, guard: TypeGuard<T>) => {
	const nodes: T[] = [];

	visit(tree, guard, (node) => nodes.push(node));

	return nodes;
};

const definitionsFrom = (root: import('mdast').Root) => collect(root, isDefinition);

export const visit = <T extends Node>(
	tree: Node,
	guard: TypeGuard<T>,
	visitor: (node: T) => void
) => {
	if (guard(tree)) {
		visitor(tree);
	}

	if (isParent(tree)) {
		for (const child of tree.children) {
			visit(child, guard, visitor);
		}
	}
};

export default (root: import('mdast').Root | undefined) => {
	if (root === undefined) return () => undefined;

	const cache = definitionsFrom(root).reduce(
		(acc, def) => Object.assign(acc, { [def.identifier]: def }),
		{} as Record<string, import('mdast').Definition>
	);

	return (identifier: string | null | undefined) =>
		identifier !== null && identifier !== undefined ? cache[identifier] : undefined;
};
