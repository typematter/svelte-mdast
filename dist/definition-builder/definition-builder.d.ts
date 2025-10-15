declare module '@typematter/svelte-unist' {
    interface UnistContext {
        getDefinition?: ReturnType<typeof definitionBuilder>;
    }
}
export declare const definitionBuilder: (root?: import("mdast").Root) => (identifier: string | null | undefined) => import("mdast").Definition | undefined;
