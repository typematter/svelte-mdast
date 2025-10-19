import { isHeading } from '@accuser/mdast-util-type-guards';
import { collect } from '@typematter/svelte-unist';
import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';
import { SvelteMap } from 'svelte/reactivity';
export const getHeadingIds = (node) => {
    const slugger = new GithubSlugger();
    return collect(node, isHeading).reduce((acc, heading) => acc.set(heading, slugger.slug(toString(heading.children))), new SvelteMap());
};
