<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').Heading } = $props();

	let { children, depth } = $derived(node);

	let tag = $derived(`h${depth}`);
</script>

<svelte:element this={tag}
	>{#each children as child}<Node node={child} />{/each}</svelte:element
>
