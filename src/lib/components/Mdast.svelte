<script lang="ts">
	import definitionBuilder from '$lib/builders/definition-builder.js';
	import mdastComponents from '$lib/defaults/mdast-components.js';

	import { setUnistContext, Unist, type Props } from '@accuser/svelte-unist';

	let { ast, components, ...rest }: { ast: import('mdast').Root } & Props = $props();

	let getDefinition = $derived.by(() => definitionBuilder(ast));

	setUnistContext({ getDefinition: (identifier) => getDefinition(identifier) });
</script>

<Unist {ast} components={{ ...mdastComponents, ...components }} {...rest} />
