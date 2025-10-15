# Svelte Mdast

Transform [Mdast](https://github.com/syntax-tree/mdast) into Svelte components.

## Installing

Add the `@accuser/svelte-mdast` package dependency to your [Svelte](https://svelte.dev) / [SvelteKit](https://kit.svelte.dev) project:

```sh
npm install --save-dev @accuser/svelte-mdast

# or
yarn add -D @accuser/svelte-mdast

# or
pnpm add -D @accuser/svelte-mdast
```

## Usage

```svelte
<script lang="ts">
	import { components } from '@accuser/svelte-mdast';
	import { Unist } from '@accuser/svelte-unist';
	import { u } from 'unist-builder';

	const ast: import('mdast').Root = u('root', [
		u('heading', { depth: 1 as const }, [u('text', 'Hello, World!')])
	]);
</script>

<Unist {ast} />
```

## Test

```sh
npm test
```

## License

[MIT](LICENSE)

## Copyright

Copyright &copy; 2025 [Matthew Gibbons](https://github.com/accuser)
