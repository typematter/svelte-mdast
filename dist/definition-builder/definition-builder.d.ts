declare module '@accuser/svelte-unist' {
    interface UnistContext {
        getDefinition?: ReturnType<typeof definitionBuilder>;
    }
}
export declare const definitionBuilder: (root: import("mdast").Root | undefined) => (identifier: string | null | undefined) => import("mdast").Definition | undefined;
