declare module '@accuser/svelte-unist' {
	interface ComponentMap {
		code: import('mdast').Code;
	}
}

export { default as Code } from './code.svelte';
