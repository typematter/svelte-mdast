<script lang="ts" module>
	declare module '@accuser/svelte-unist' {
		interface UnistContext {
			getDefinition?: ReturnType<typeof definitionBuilder>;
		}
	}
</script>

<script lang="ts">
	import { definitionBuilder } from '$lib/components/mdast/definition-builder.js';
	import { Unist } from '@accuser/svelte-unist';
	import type { ComponentProps } from 'svelte';
	import { defaultComponents } from './default-components.js';

	let {
		ast,
		components,
		getDefinition = definitionBuilder(ast),
		...rest
	}: { ast: import('mdast').Root } & Omit<ComponentProps<typeof Unist>, 'ast'> = $props();
</script>

<Unist {ast} components={{ ...defaultComponents, ...components }} {getDefinition} {...rest} />
