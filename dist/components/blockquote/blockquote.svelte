<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').Blockquote } = $props();

	let { children } = $derived(node);
</script>

<blockquote>
	{#each children as child}<Node node={child} />{/each}
</blockquote>
