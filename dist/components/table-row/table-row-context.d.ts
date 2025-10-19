export interface TableRowContext {
    getAlign: (cell: import('mdast').TableCell) => import('mdast').AlignType;
}
export declare const getTableRowContext: () => TableRowContext, setTableRowContext: (context: TableRowContext) => TableRowContext;
