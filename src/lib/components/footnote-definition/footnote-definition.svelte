<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').FootnoteDefinition } = $props();

	let { children, identifier, label } = $derived(node);
</script>

<div id="footnote-{identifier}">
	<p>{label}.</p>
	{#each children as child (child)}<Node node={child} />{/each}
	<a href="#footnote-ref-{identifier}" aria-label="Back to content">&hookleftarrow;</a>
</div>
