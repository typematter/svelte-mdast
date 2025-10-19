<script lang="ts">
	import { Node } from '@typematter/svelte-unist';
	import { getDefinitions } from './get-definitions.js';
	import { getFrontmatter } from './get-frontmatter.js';
	import { getHeadingIds } from './get-heading-ids.js';
	import { setRootContext } from './root-context.js';

	let { node }: { node: import('mdast').Root } = $props();

	let { children } = $derived(node);

	let definitions = $derived(getDefinitions(node));
	let frontmatter = $derived(getFrontmatter(node));
	let headings = $derived(getHeadingIds(node));

	setRootContext({
		getDefinition: (identifier) => definitions.get(identifier),
		getFrontmatter: () => frontmatter,
		getHeadingId: (heading) => headings.get(heading)
	});
</script>

{#each children as child (child)}<Node node={child} />{/each}
