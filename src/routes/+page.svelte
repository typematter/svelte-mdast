<script lang="ts">
	import * as Mdast from '$lib/components/index.js';
	import { Unist } from '@typematter/svelte-unist';
	import { u } from 'unist-builder';

	const ast: import('mdast').Root = u('root', [
		u('heading', { depth: 1 as const }, [u('text', 'Hello, World!')])
	]);
</script>

<Unist {ast} components={Mdast.components} />
