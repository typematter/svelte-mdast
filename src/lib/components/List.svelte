<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { List } from 'mdast';

	let { children, ordered, spread, start }: List = $props();

	let tag = $derived.by(() => (ordered ? ('ol' as const) : ('ul' as const)));
</script>

<svelte:element this={tag} class:spread {start}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
