declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		blockquote: import('mdast').Blockquote;
	}
}

export { default as Blockquote } from './blockquote.svelte';
