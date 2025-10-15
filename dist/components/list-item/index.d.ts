declare module '@typematter/svelte-unist' {
    interface ComponentMap {
        listItem: import('mdast').ListItem;
    }
}
export { default as ListItem } from './list-item.svelte';
