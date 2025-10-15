import type { definitionBuilder } from './definition-builder.js';
declare module '@typematter/svelte-unist' {
    interface UnistContext {
        getDefinition?: ReturnType<typeof definitionBuilder>;
    }
}
export * from './definition-builder.js';
