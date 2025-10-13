<script lang="ts">
	let { node }: { node: import('mdast').Html } = $props();

	let { value } = $derived(node);
</script>

{@html value}
