declare module '@accuser/svelte-unist' {
    interface UnistContext {
        getDefinition?: ReturnType<typeof definitionBuilder>;
    }
}
import { definitionBuilder } from './definition-builder.js';
import { Unist } from '@accuser/svelte-unist';
import type { ComponentProps } from 'svelte';
type $$ComponentProps = {
    ast: import('mdast').Root;
} & Omit<ComponentProps<typeof Unist>, 'ast'>;
declare const Mdast: import("svelte").Component<$$ComponentProps, {}, "">;
type Mdast = ReturnType<typeof Mdast>;
export default Mdast;
