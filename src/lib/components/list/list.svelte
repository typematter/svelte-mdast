<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').List } = $props();

	let { children, ordered, spread, start } = $derived(node);

	let tag = $derived(ordered === true ? ('ol' as const) : ('ul' as const));
</script>

<svelte:element this={tag} class:spread {start}
	>{#each children as child (child)}<Node node={child} />{/each}</svelte:element
>
