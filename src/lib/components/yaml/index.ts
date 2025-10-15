declare module '@typematter/svelte-unist' {
	interface ComponentMap {
		yaml: import('mdast').Yaml;
	}
}

export { default as Yaml } from './yaml.svelte';
