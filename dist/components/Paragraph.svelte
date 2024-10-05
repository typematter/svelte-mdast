<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { Paragraph } from 'mdast';

	let { children }: Paragraph = $props();
</script>

<p>
	{#each children as node}<Node {...node} />{/each}
</p>
