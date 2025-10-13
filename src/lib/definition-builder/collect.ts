import type { TypeGuard } from '@accuser/mdast-util-type-guards';
import type { Node } from 'mdast';
import { visit } from './visit.js';

export const collect = <T extends Node>(tree: Node, guard: TypeGuard<T>) => {
	const nodes: T[] = [];

	visit(tree, guard, (node) => nodes.push(node));

	return nodes;
};
