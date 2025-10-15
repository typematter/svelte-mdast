import { isDefinition } from '@accuser/mdast-util-type-guards';
import { collect } from '@typematter/svelte-unist';
export const definitionsFrom = ((root) => collect(root, isDefinition));
