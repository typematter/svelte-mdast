import { u } from 'unist-builder';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const ast: import('mdast').Root = u('root', [
		u('heading', { depth: 1 as const }, [u('text', 'Hello, World!')])
	]);

	return { ast };
}) satisfies PageServerLoad;
