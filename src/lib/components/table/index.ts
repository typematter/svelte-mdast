declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		table: import('mdast').Table;
	}
}

export { default as Table } from './table.svelte';
