<script lang="ts">
	import type { Code } from 'mdast';

	let { lang, meta, value }: Code = $props();
</script>

<pre><code {lang} data-meta={meta}>{value}</code></pre>
