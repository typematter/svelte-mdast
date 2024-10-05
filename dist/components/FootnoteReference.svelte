<script lang="ts">
	import type { FootnoteReference } from 'mdast';

	let { identifier, label }: FootnoteReference = $props();
</script>

<sup
	><a id="footnote-ref-{identifier}" href="#footnote-{identifier}" aria-describedby="footnote-label"
		>{label}</a
	></sup
>
