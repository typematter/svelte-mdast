<script lang="ts">
	import { getUnistContext } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').ImageReference } = $props();

	let { alt, identifier } = $derived(node);

	const { getDefinition } = getUnistContext();

	let { url, title } = $derived(getDefinition?.(identifier) ?? { url: '#', title: undefined });
</script>

<img src={url} {alt} {title} />
