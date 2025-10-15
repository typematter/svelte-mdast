<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').Root } = $props();

	let { children } = $derived(node);
</script>

{#each children as child}<Node node={child} />{/each}
