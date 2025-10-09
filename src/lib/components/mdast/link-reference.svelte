<script lang="ts">
	import { getContext, Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').LinkReference } = $props();

	// TODO: implement `referenceType`?
	let { children, identifier } = $derived(node);

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

<a href={url} {title}
	>{#each children as child}<Node node={child} />{/each}</a
>
