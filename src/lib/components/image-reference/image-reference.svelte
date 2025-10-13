<script lang="ts">
	import { getUnistContext } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').ImageReference } = $props();

	// TODO: implement `referenceType`?
	let { alt, identifier } = $derived(node);

	const { getDefinition } = getUnistContext();

	let { url, title } = $derived(getDefinition?.(identifier) ?? { url: '#', title: undefined });
</script>

<img src={url} {alt} {title} />
