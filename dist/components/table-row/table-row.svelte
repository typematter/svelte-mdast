<script lang="ts">
	import { getTableContext } from '../table/index.js';
	import { Node } from '@typematter/svelte-unist';
	import { SvelteMap } from 'svelte/reactivity';
	import { setTableRowContext } from './table-row-context.js';

	let { node }: { node: import('mdast').TableRow } = $props();

	let { children } = $derived(node);

	let { getAlign } = getTableContext();

	let alignment = $derived.by(() => {
		const align = getAlign();

		return children.reduce(
			(acc, child, index) => acc.set(child, align ? align[index] || null : align),
			new SvelteMap<import('mdast').TableCell, import('mdast').AlignType>()
		);
	});

	setTableRowContext({
		getAlign: (cell: import('mdast').TableCell) => alignment.get(cell) || null
	});
</script>

<tr
	>{#each children as child (child)}<Node node={child} />{/each}</tr
>
