declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		footnoteDefinition: import('mdast').FootnoteDefinition;
	}
}

export { default as FootnoteDefinition } from './footnote-definition.svelte';
