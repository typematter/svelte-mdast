declare module '@accuser/svelte-unist' {
    interface UnistContext {
        getDefinition: ReturnType<typeof definitionBuilder>;
    }
}
import definitionBuilder from '../builders/definition-builder.js';
import { type UnistProps } from '@accuser/svelte-unist';
declare const Mdast: import("svelte").Component<{
    ast: import("mdast").Root;
} & UnistProps, {}, "">;
export default Mdast;
