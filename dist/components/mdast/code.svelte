<script lang="ts">
	let { node }: { node: import('mdast').Code } = $props();

	let { lang, meta, value } = $derived(node);
</script>

<pre><code {lang} data-meta={meta}>{value}</code></pre>
