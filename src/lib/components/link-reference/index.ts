declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		linkReference: import('mdast').LinkReference;
	}
}

export { default as LinkReference } from './link-reference.svelte';
