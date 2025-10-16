<script lang="ts" module>
	declare module 'mdast' {
		interface TableRowData {
			align?: AlignType[] | null;
		}
	}
</script>

<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').TableRow } = $props();

	let { children, data } = $derived(node);

	let align = $derived(data?.align);

	let columns = $derived(
		children.map((child, index) => ({
			...child,
			data: { ...child.data, align: align ? align[index] : undefined }
		}))
	);
</script>

<tr
	>{#each columns as column (column)}<Node node={column} />{/each}</tr
>
