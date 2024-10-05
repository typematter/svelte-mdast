<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { Delete } from 'mdast';

	let { children }: Delete = $props();
</script>

<del
	>{#each children as node}<Node {...node} />{/each}</del
>
