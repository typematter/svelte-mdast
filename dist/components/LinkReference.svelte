<script lang="ts">
	import { getUnistContext, Node } from '@accuser/svelte-unist';
	import type { LinkReference } from 'mdast';

	// TODO: implement `referenceType`?
	let { children, identifier }: LinkReference = $props();

	const { getDefinition } = getUnistContext();

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
	>{#each children as node}<Node {...node} />{/each}</a
>
