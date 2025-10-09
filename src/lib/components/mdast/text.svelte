<script lang="ts">
	let { node }: { node: import('mdast').Text } = $props();

	let { value } = $derived(node);
</script>

{value}
