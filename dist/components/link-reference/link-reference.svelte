<script lang="ts">
	import { getUnistContext, Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').LinkReference } = $props();

	let { children, identifier } = $derived(node);

	const { getDefinition } = getUnistContext();

	let { url, title } = $derived(getDefinition?.(identifier) ?? { url: '#', title: undefined });
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a href={url} {title}
	>{#each children as child (child)}<Node node={child} />{/each}</a
>
