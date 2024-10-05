<script lang="ts">
	import Mdast from '$lib/components/Mdast.svelte';
	import { u } from 'unist-builder';

	const ast: import('mdast').Root = u('root', [
		u('heading', { depth: 1 as const }, [u('text', 'Hello, World!')])
	]);
</script>

<Mdast {ast} />
