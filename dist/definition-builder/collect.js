import { visit } from './visit.js';
export const collect = (tree, guard) => {
    const nodes = [];
    visit(tree, guard, (node) => nodes.push(node));
    return nodes;
};
