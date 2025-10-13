<script lang="ts">
	let { node }: { node: import('mdast').InlineCode } = $props();

	let { value } = $derived(node);
</script>

<code>{value}</code>
