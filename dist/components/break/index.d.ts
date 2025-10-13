declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        break: import('mdast').Break;
    }
}
export { default as Break } from './break.svelte';
