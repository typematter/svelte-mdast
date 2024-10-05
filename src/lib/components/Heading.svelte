<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { Heading } from 'mdast';

	let { children, depth }: Heading = $props();

	let tag = $derived.by(() => `h${depth}`);
</script>

<svelte:element this={tag}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
