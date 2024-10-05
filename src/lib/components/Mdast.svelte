<script lang="ts" module>
	declare module '@accuser/svelte-unist' {
		export interface UnistContext {
			getDefinition: ReturnType<typeof definitionBuilder>;
		}
	}
</script>

<script lang="ts">
	import definitionBuilder from '$lib/builders/definition-builder.js';

	import defaultComponents from '$lib/defaults/default-components.js';
	import { Unist, setUnistContext } from '@accuser/svelte-unist';

	let {
		ast,
		...context
	}: { ast: import('mdast').Root } & Partial<ReturnType<typeof setUnistContext>> = $props();

	let getDefinition = $derived.by(() => definitionBuilder(ast));

	setUnistContext({
		...context,
		components: { ...defaultComponents, ...context.components },
		getDefinition: (identifier) => getDefinition(identifier)
	});
</script>

<Unist {ast} />
