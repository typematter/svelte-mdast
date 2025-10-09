<script lang="ts">
	let { node }: { node: import('mdast').Image } = $props();

	let { alt, url, title } = $derived(node);
</script>

<img src={url} {alt} {title} />
