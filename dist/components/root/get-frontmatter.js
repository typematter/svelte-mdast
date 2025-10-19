import { isYaml } from '@accuser/mdast-util-type-guards';
import { parse } from 'yaml';
export const getFrontmatter = (root) => {
    if (isYaml(root.children[0])) {
        try {
            return parse(root.children[0].value);
        }
        catch {
            return undefined;
        }
    }
};
