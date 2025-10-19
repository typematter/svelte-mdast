<script lang="ts">
	import { getRootContext } from '$lib/components/root/index.js';

	let { node }: { node: import('mdast').ImageReference } = $props();

	let { alt, identifier } = $derived(node);

	const { getDefinition } = getRootContext();

	let { url, title } = $derived(getDefinition(identifier) ?? { url: '#', title: undefined });
</script>

<img src={url} {alt} {title} />
