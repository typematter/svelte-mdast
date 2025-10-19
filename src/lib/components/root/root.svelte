<script lang="ts">
	import { isDefinition, isHeading } from '@accuser/mdast-util-type-guards';
	import { collect, Node } from '@typematter/svelte-unist';
	import GithubSlugger from 'github-slugger';
	import { toString } from 'mdast-util-to-string';
	import { SvelteMap } from 'svelte/reactivity';
	import { setRootContext } from './root-context.js';

	let { node }: { node: import('mdast').Root } = $props();

	let { children } = $derived(node);

	let definitions = $derived(
		collect(node, isDefinition).reduce(
			(acc, definition) => Object.assign(acc, { [definition.identifier]: definition }),
			{} as Record<string, import('mdast').Definition>
		)
	);

	let headings = $derived.by(() => {
		const slugger = new GithubSlugger();

		return collect(node, isHeading).reduce(
			(acc, heading) => acc.set(heading, slugger.slug(toString(heading.children))),
			new SvelteMap<import('mdast').Heading, string>()
		);
	});

	setRootContext({
		getDefinition: (identifier) =>
			identifier === undefined || identifier === null ? undefined : definitions[identifier],
		getHeadingId: (heading) => headings.get(heading)
	});
</script>

{#each children as child (child)}<Node node={child} />{/each}
