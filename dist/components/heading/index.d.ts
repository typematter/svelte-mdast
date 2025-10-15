declare module '@typematter/svelte-unist' {
    interface ComponentMap {
        heading: import('mdast').Heading;
    }
}
export { default as Heading } from './heading.svelte';
