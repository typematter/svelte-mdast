import { isDefinition } from '@accuser/mdast-util-type-guards';
import { collect } from '@typematter/svelte-unist';
import { SvelteMap } from 'svelte/reactivity';
export const getDefinitions = (root) => collect(root, isDefinition).reduce((acc, definition) => acc.set(definition.identifier, definition), new SvelteMap());
