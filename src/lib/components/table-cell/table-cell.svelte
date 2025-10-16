<script lang="ts" module>
	declare module 'mdast' {
		interface TableCellData {
			align?: AlignType | null;
		}
	}
</script>

<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').TableCell } = $props();

	let { children, data } = $derived(node);

	let align = $derived(data?.align);
</script>

<td {align}
	>{#each children as child (child)}<Node node={child} />{/each}</td
>
