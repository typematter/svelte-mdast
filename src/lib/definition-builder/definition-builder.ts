import { definitionsFrom } from './definitions-from.js';

declare module '@accuser/svelte-unist' {
	interface UnistContext {
		getDefinition?: ReturnType<typeof definitionBuilder>;
	}
}

export const definitionBuilder = (root?: import('mdast').Root) => {
	if (root === undefined) return () => undefined;

	const cache = definitionsFrom(root).reduce(
		(acc, def) => Object.assign(acc, { [def.identifier]: def }),
		{} as Record<string, import('mdast').Definition>
	);

	return (identifier: string | null | undefined) =>
		identifier !== undefined && identifier !== null ? cache[identifier] : undefined;
};
