declare module '@accuser/svelte-unist' {
    interface UnistContext {
        getDefinition: ReturnType<typeof definitionBuilder>;
    }
}
import definitionBuilder from '../builders/definition-builder.js';
declare const Mdast: import("svelte").Component<{
    ast: import("mdast").Root;
} & Partial<import("@accuser/svelte-unist").UnistContext>, {}, "">;
export default Mdast;
