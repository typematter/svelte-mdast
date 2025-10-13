import { isDefinition } from '@accuser/mdast-util-type-guards';
import { collect } from './collect.js';
export const definitionsFrom = (root) => collect(root, isDefinition);
