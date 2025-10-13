declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        image: import('mdast').Image;
    }
}
export { default as Image } from './image.svelte';
