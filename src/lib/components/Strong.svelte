<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { Strong } from 'mdast';

	let { children }: Strong = $props();
</script>

<strong
	>{#each children as node}<Node {...node} />{/each}</strong
>
