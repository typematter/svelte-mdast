<script lang="ts">
	import { getUnistContext, Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').LinkReference } = $props();

	// TODO: implement `referenceType`?
	let { children, identifier } = $derived(node);

	const { getDefinition } = getUnistContext();

	let { url, title } = $derived(getDefinition?.(identifier) ?? { url: '#', title: undefined });
</script>

<a href={url} {title}
	>{#each children as child}<Node node={child} />{/each}</a
>
