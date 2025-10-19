declare module '@typematter/svelte-unist' {
    interface ComponentMap {
        tableRow: import('mdast').TableRow;
    }
}
export { getTableRowContext } from './table-row-context.js';
export { default as TableRow } from './table-row.svelte';
