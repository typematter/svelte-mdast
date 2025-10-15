declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		root: import('mdast').Root;
	}
}

export { default as Root } from './root.svelte';
