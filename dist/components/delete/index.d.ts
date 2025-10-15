declare module '@typematter/svelte-unist' {
    interface ComponentMap {
        delete: import('mdast').Delete;
    }
}
export { default as Delete } from './delete.svelte';
