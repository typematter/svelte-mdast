<script lang="ts">
	import { getRootContext } from '$lib/components/root/index.js';
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').Heading } = $props();

	let { children, depth } = $derived(node);

	let { getHeadingId } = getRootContext();

	let id = $derived(getHeadingId(node));
	let tag = $derived(`h${depth}`);
</script>

<svelte:element this={tag} {id}
	>{#each children as child (child)}<Node node={child} />{/each}</svelte:element
>
