declare module '@typematter/svelte-unist' {
    interface ComponentMap {
        html: import('mdast').Html;
    }
}
export { default as Html } from './html.svelte';
