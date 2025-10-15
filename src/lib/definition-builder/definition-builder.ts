import { definitionsFrom } from './definitions-from.js';

export const definitionBuilder = (root?: import('mdast').Root) => {
	if (root === undefined) return () => undefined;

	const cache = definitionsFrom(root).reduce(
		(acc, def) => Object.assign(acc, { [def.identifier]: def }),
		{} as Record<string, import('mdast').Definition>
	);

	return (identifier: string | null | undefined) =>
		identifier !== undefined && identifier !== null ? cache[identifier] : undefined;
};
