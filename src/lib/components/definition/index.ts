declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		definition: import('mdast').Definition;
	}
}

export { default as Definition } from './definition.svelte';
