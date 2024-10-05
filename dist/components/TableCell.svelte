<script lang="ts" module>
	declare module 'mdast' {
		interface TableCellData {
			align?: AlignType | null;
		}
	}
</script>

<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { TableCell } from 'mdast';

	let { children, data }: TableCell = $props();

	let align = $derived(data?.align);
</script>

<td {align}
	>{#each children as node}<Node {...node} />{/each}</td
>
