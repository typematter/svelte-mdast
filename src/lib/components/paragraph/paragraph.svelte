<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').Paragraph } = $props();
	let { children } = $derived(node);
</script>

<p>
	{#each children as child (child)}<Node node={child} />{/each}
</p>
