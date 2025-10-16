<script lang="ts">
	import { sanitizeId } from '../../utils/index.js';

	let { node }: { node: import('mdast').FootnoteReference } = $props();

	let { identifier, label } = $derived(node);

	let id = $derived(sanitizeId(identifier));
</script>

<sup
	><a id="footnote-ref-{id}" href="#footnote-{id}" aria-describedby="footnote-label">{label}</a
	></sup
>
