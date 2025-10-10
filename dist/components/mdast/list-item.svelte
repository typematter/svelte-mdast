<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').ListItem } = $props();
	let { children } = $derived(node);
</script>

<li>
	{#each children as child}<Node node={child} />{/each}
</li>
