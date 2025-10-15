<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').Link } = $props();

	let { children, title, url } = $derived(node);
</script>

<a href={url} {title}
	>{#each children as child}<Node node={child} />{/each}</a
>
