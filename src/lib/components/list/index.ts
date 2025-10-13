declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		list: import('mdast').List;
	}
}

export { default as List } from './list.svelte';
