import { definitionsFrom } from './definitions-from.js';
export const definitionBuilder = (root) => {
    if (root === undefined)
        return () => undefined;
    const cache = definitionsFrom(root).reduce((acc, def) => Object.assign(acc, { [def.identifier]: def }), {});
    return (identifier) => identifier !== undefined && identifier !== null ? cache[identifier] : undefined;
};
