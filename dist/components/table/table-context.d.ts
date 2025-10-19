export interface TableContext {
    getAlign: () => import('mdast').AlignType[] | null;
}
export declare const getTableContext: () => TableContext, setTableContext: (context: TableContext) => TableContext;
