declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		thematicBreak: import('mdast').ThematicBreak;
	}
}

export { default as ThematicBreak } from './thematic-break.svelte';
