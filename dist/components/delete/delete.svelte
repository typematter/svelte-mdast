<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').Delete } = $props();

	let { children } = $derived(node);
</script>

<del
	>{#each children as child}<Node node={child} />{/each}</del
>
