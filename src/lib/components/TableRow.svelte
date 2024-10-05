<script lang="ts" module>
	declare module 'mdast' {
		interface TableRowData {
			align?: AlignType[] | null;
		}
	}
</script>

<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { TableRow } from 'mdast';

	let { children, data }: TableRow = $props();

	let align = $derived(data?.align);

	let columns = $derived.by(() =>
		children.map((child, index) => ({
			...child,
			data: { ...child.data, align: align ? align[index] : undefined }
		}))
	);
</script>

<tr
	>{#each columns as column}<Node {...column} />{/each}</tr
>
