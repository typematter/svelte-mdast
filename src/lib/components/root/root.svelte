<script lang="ts">
	import { isDefinition } from '@accuser/mdast-util-type-guards';
	import { collect, Node } from '@typematter/svelte-unist';
	import { setRootContext } from './root-context.js';

	let { node }: { node: import('mdast').Root } = $props();

	let { children } = $derived(node);

	let definitions = $derived(
		collect(node, isDefinition).reduce(
			(acc, def) => Object.assign(acc, { [def.identifier]: def }),
			{} as Record<string, import('mdast').Definition>
		)
	);

	setRootContext({
		getDefinition: (identifier) =>
			identifier === undefined || identifier === null ? undefined : definitions[identifier]
	});
</script>

{#each children as child (child)}<Node node={child} />{/each}
