import { type TypeGuard } from '@accuser/mdast-util-type-guards';
import type { Node } from 'mdast';
export declare const visit: <T extends Node>(tree: Node, guard: TypeGuard<T>, visitor: (node: T) => void) => void;
