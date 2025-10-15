declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		emphasis: import('mdast').Emphasis;
	}
}

export { default as Emphasis } from './emphasis.svelte';
