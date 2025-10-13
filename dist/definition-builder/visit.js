import { isParent } from '@accuser/mdast-util-type-guards';
export const visit = (tree, guard, visitor) => {
    if (guard(tree)) {
        visitor(tree);
    }
    if (isParent(tree)) {
        for (const child of tree.children) {
            visit(child, guard, visitor);
        }
    }
};
