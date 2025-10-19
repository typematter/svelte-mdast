declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		root: import('mdast').Root;
	}
}

export { getRootContext } from './root-context.js';
export { default as Root } from './root.svelte';
export * from './yaml-value.js';
