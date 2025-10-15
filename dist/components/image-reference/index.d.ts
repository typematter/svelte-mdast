declare module '@typematter/svelte-unist' {
    interface ComponentMap {
        imageReference: import('mdast').ImageReference;
    }
}
export { default as ImageReference } from './image-reference.svelte';
