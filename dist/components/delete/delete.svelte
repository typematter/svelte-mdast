<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').Delete } = $props();

	let { children } = $derived(node);
</script>

<del
	>{#each children as child}<Node node={child} />{/each}</del
>
