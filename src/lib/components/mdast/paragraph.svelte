<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').Paragraph } = $props();
	let { children } = $derived(node);
</script>

<p>
	{#each children as child}<Node node={child} />{/each}
</p>
