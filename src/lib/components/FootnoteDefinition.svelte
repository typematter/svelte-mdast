<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { FootnoteDefinition } from 'mdast';

	let { children, identifier, label }: FootnoteDefinition = $props();
</script>

<div id="footnote-{identifier}">
	<p>{label}.</p>
	{#each children as node}<Node {...node} />{/each}
	<a href="#footnote-ref-{identifier}" aria-label="Back to content">&hookleftarrow;</a>
</div>
