declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		yaml: import('mdast').Yaml;
	}
}

export { default as Yaml } from './yaml.svelte';
