declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		link: import('mdast').Link;
	}
}

export { default as Link } from './link.svelte';
