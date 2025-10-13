declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        root: import('mdast').Root;
    }
}
export { default as Root } from './root.svelte';
