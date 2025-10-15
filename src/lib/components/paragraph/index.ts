declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		paragraph: import('mdast').Paragraph;
	}
}

export { default as Paragraph } from './paragraph.svelte';
