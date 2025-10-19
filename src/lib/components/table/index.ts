declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		table: import('mdast').Table;
	}
}

export { getTableContext } from './table-context.js';
export { default as Table } from './table.svelte';
