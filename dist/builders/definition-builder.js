import { isDefinition, isParent } from '@accuser/mdast-util-type-guards';
const collect = (tree, guard) => {
    const nodes = [];
    visit(tree, guard, (node) => nodes.push(node));
    return nodes;
};
const definitionsFrom = (root) => collect(root, isDefinition);
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
export default (root) => {
    if (root === undefined)
        return () => undefined;
    const cache = definitionsFrom(root).reduce((acc, def) => Object.assign(acc, { [def.identifier]: def }), {});
    return (identifier) => identifier !== null && identifier !== undefined ? cache[identifier] : undefined;
};
