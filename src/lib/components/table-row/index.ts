declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		tableRow: import('mdast').TableRow;
	}
}

export { default as TableRow } from './table-row.svelte';
