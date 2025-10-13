import { isDefinition } from '@accuser/mdast-util-type-guards';
import type { Root } from 'mdast';
import { collect } from './collect.js';

export const definitionsFrom = (root: Root) => collect(root, isDefinition);
