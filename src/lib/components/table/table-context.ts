import { createContext } from 'svelte';

export interface TableContext {
	getAlign: () => import('mdast').AlignType[] | null;
}

export const [getTableContext, setTableContext] = createContext<TableContext>();
