declare module 'mdast' {
    interface TableRowData {
        align?: AlignType[] | null;
    }
}
type $$ComponentProps = {
    node: import('mdast').TableRow;
};
declare const TableRow: import("svelte").Component<$$ComponentProps, {}, "">;
type TableRow = ReturnType<typeof TableRow>;
export default TableRow;
