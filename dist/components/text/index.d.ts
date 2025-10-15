declare module '@typematter/svelte-unist' {
    interface ComponentMap {
        text: import('mdast').Text;
    }
}
export { default as Text } from './text.svelte';
