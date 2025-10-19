import { createContext } from 'svelte';

export interface TableRowContext {
	getAlign: (cell: import('mdast').TableCell) => import('mdast').AlignType;
}

export const [getTableRowContext, setTableRowContext] = createContext<TableRowContext>();
