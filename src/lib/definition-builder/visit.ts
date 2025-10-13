import { isParent, type TypeGuard } from '@accuser/mdast-util-type-guards';
import type { Node } from 'mdast';

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
