<script lang="ts">
	import { isDefinition, isHeading, isYaml } from '@accuser/mdast-util-type-guards';
	import { collect, Node } from '@typematter/svelte-unist';
	import GithubSlugger from 'github-slugger';
	import { toString } from 'mdast-util-to-string';
	import { SvelteMap } from 'svelte/reactivity';
	import { parse } from 'yaml';
	import { setRootContext } from './root-context.js';
	import type { YamlValue } from './yaml-value.js';

	let { node }: { node: import('mdast').Root } = $props();

	let { children } = $derived(node);

	let definitions = $derived(
		collect(node, isDefinition).reduce(
			(acc, definition) => acc.set(definition.identifier, definition),
			new SvelteMap<string, import('mdast').Definition>()
		)
	);

	let frontmatter = $derived.by(() => {
		if (isYaml(node.children[0])) {
			try {
				return parse(node.children[0].value) as YamlValue;
			} catch {}
		}
	});

	let headings = $derived.by(() => {
		const slugger = new GithubSlugger();

		return collect(node, isHeading).reduce(
			(acc, heading) => acc.set(heading, slugger.slug(toString(heading.children))),
			new SvelteMap<import('mdast').Heading, string>()
		);
	});

	setRootContext({
		getDefinition: (identifier) => definitions.get(identifier),
		getFrontmatter: () => frontmatter,
		getHeadingId: (heading) => headings.get(heading)
	});
</script>

{#each children as child (child)}<Node node={child} />{/each}
