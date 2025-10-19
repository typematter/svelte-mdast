<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').ListItem } = $props();

	let { checked, children, spread } = $derived(node);
</script>

<li class:spread>
	{#if typeof checked === 'boolean'}
		<input type="checkbox" {checked} disabled />
	{/if}
	{#each children as child (child)}<Node node={child} />{/each}
</li>
