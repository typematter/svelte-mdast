<script lang="ts">
	let { node }: { node: import('mdast').Html } = $props();

	let { value } = $derived(node);
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html value}
