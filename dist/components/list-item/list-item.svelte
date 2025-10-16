<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').ListItem } = $props();

	let { checked, children, spread } = $derived(node);
</script>

<li class:spread>
	{#if checked !== null && checked !== undefined}
		<input type="checkbox" disabled {checked} />
	{/if}
	{#each children as child (child)}<Node node={child} />{/each}
</li>
