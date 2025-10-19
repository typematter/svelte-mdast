import { isYaml } from '@accuser/mdast-util-type-guards';
import { parse } from 'yaml';
import type { YamlValue } from './yaml-value.js';

export const getFrontmatter = (root: import('mdast').Root) => {
	if (isYaml(root.children[0])) {
		try {
			return parse(root.children[0].value) as YamlValue;
		} catch {
			return undefined;
		}
	}
};
