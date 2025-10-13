declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		strong: import('mdast').Strong;
	}
}

export { default as Strong } from './strong.svelte';
