import { collect } from '$lib/utils/index.js';
import { isDefinition } from '@accuser/mdast-util-type-guards';

export const definitionsFrom = (root: import('mdast').Root) => collect(root, isDefinition);
