<script lang="ts">
	import { Node } from '@accuser/svelte-unist';

	let { node }: { node: import('mdast').Strong } = $props();
	let { children } = $derived(node);
</script>

<strong
	>{#each children as child}<Node node={child} />{/each}</strong
>
