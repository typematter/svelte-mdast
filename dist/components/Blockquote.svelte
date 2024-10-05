<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { Blockquote } from 'mdast';

	let { children }: Blockquote = $props();
</script>

<blockquote>
	{#each children as node}<Node {...node} />{/each}
</blockquote>
