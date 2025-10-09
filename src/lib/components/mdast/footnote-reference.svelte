<script lang="ts">
	let { node }: { node: import('mdast').FootnoteReference } = $props();

	let { identifier, label } = $derived(node);
</script>

<sup
	><a id="footnote-ref-{identifier}" href="#footnote-{identifier}" aria-describedby="footnote-label"
		>{label}</a
	></sup
>
