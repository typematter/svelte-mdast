<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { Emphasis } from 'mdast';

	let { children }: Emphasis = $props();
</script>

<em
	>{#each children as node}<Node {...node} />{/each}</em
>
