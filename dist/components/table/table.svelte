<script lang="ts">
	import { Node } from '@typematter/svelte-unist';
	import { setTableContext } from './table-context.js';

	let { node }: { node: import('mdast').Table } = $props();

	let { align = null, children } = $derived(node);

	setTableContext({ getAlign: () => align });

	let [head, ...rows] = $derived(children);
</script>

<table>
	{#if head}
		<thead>
			<Node node={head} />
		</thead>
	{/if}
	{#if rows.length}
		<tbody>
			{#each rows as row (row)}<Node node={row} />{/each}
		</tbody>
	{/if}
</table>
