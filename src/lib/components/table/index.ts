declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		table: import('mdast').Table;
	}
}

export { default as Table } from './table.svelte';
