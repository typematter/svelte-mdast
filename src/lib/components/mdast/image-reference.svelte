<script lang="ts">
	import { getContext } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').ImageReference } = $props();

	// TODO: implement `referenceType`?
	let { alt, identifier } = $derived(node);

	const { getDefinition } = getContext();

	let { url, title } = $derived.by(() => {
		const definition = getDefinition?.(identifier);

		if (definition) {
			return definition;
		} else {
			return { url: '#', title: undefined };
		}
	});
</script>

<img src={url} {alt} {title} />
