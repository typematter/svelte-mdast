declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		tableCell: import('mdast').TableCell;
	}
}

export { default as TableCell } from '../table-cell/table-cell.svelte';
