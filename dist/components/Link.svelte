<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { Link } from 'mdast';

	let { children, title, url }: Link = $props();
</script>

<a href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</a
>
