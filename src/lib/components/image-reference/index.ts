declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		imageReference: import('mdast').ImageReference;
	}
}

export { default as ImageReference } from './image-reference.svelte';
