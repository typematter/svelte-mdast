<script lang="ts">
	import { getTableRowContext } from '../table-row/index.js';
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').TableCell } = $props();

	let { children } = $derived(node);

	let { getAlign } = getTableRowContext();

	let align = $derived(getAlign(node));
</script>

<td {align}
	>{#each children as child (child)}<Node node={child} />{/each}</td
>
