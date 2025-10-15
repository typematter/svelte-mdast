declare module '@typematter/svelte-unist' {
    interface ComponentMap {
        inlineCode: import('mdast').InlineCode;
    }
}
export { default as InlineCode } from './inline-code.svelte';
