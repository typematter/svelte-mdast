<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').Emphasis } = $props();

	let { children } = $derived(node);
</script>

<em
	>{#each children as child}<Node node={child} />{/each}</em
>
