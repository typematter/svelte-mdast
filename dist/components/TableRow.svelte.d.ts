declare module 'mdast' {
    interface TableRowData {
        align?: AlignType[] | null;
    }
}
import type { TableRow } from 'mdast';
declare const TableRow: import("svelte").Component<TableRow, {}, "">;
export default TableRow;
