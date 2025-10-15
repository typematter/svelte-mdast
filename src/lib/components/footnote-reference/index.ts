declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		footnoteReference: import('mdast').FootnoteReference;
	}
}

export { default as FootnoteReference } from './footnote-reference.svelte';
