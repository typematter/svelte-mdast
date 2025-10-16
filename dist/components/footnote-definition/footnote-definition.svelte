<script lang="ts">
	import { sanitizeId } from '../../utils/index.js';
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').FootnoteDefinition } = $props();

	let { children, identifier, label } = $derived(node);

	let id = $derived(sanitizeId(identifier));
</script>

<div id="footnote-{id}">
	<p>{label}.</p>
	{#each children as child (child)}<Node node={child} />{/each}
	<a href="#footnote-ref-{id}" aria-label="Back to content">&hookleftarrow;</a>
</div>
