<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { ListItem } from 'mdast';

	let { children }: ListItem = $props();
</script>

<li>
	{#each children as node}<Node {...node} />{/each}
</li>
