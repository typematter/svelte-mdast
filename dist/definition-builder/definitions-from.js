import { collect } from '../utils/index.js';
import { isDefinition } from '@accuser/mdast-util-type-guards';
export const definitionsFrom = (root) => collect(root, isDefinition);
