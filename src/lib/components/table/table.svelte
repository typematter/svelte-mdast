<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').Table } = $props();

	let { align, children } = $derived(node);

	let [head, ...rows] = $derived(
		children.map((child) => ({
			...child,
			data: { ...child.data, align }
		}))
	);
</script>

<table>
	{#if head}
		<thead>
			<Node node={head} />
		</thead>
	{/if}
	{#if rows.length}
		<tbody>
			{#each rows as row}<Node node={row} />{/each}
		</tbody>
	{/if}
</table>
