declare module 'mdast' {
    interface TableCellData {
        align?: AlignType | null;
    }
}
import type { TableCell } from 'mdast';
declare const TableCell: import("svelte").Component<TableCell, {}, "">;
export default TableCell;
