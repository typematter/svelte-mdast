declare module 'mdast' {
    interface TableCellData {
        align?: AlignType | null;
    }
}
import type { TableCell } from 'mdast';
type $$ComponentProps = {
    node: import('mdast').TableCell;
};
declare const TableCell: import("svelte").Component<$$ComponentProps, {}, "">;
type TableCell = ReturnType<typeof TableCell>;
export default TableCell;
