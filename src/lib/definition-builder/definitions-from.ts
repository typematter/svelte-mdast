import { isDefinition } from '@accuser/mdast-util-type-guards';
import { collect } from '@typematter/svelte-unist';

export const definitionsFrom = ((root) => collect(root, isDefinition)) satisfies (root: import('mdast').Root) => import('mdast').Definition[];
