declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        delete: import('mdast').Delete;
    }
}
export { default as Delete } from './delete.svelte';
