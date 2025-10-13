declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		text: import('mdast').Text;
	}
}

export { default as Text } from './text.svelte';
