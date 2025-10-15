# Svelte Mdast

Transform [Mdast](https://github.com/syntax-tree/mdast) into Svelte components.

## Installing

Add the `@typematter/svelte-mdast` package dependency to your [Svelte](https://svelte.dev) / [SvelteKit](https://kit.svelte.dev) project:

```sh
npm install --save-dev @typematter/svelte-mdast

# or
yarn add -D @typematter/svelte-mdast

# or
pnpm add -D @typematter/svelte-mdast
```

## Usage

```svelte
<script lang="ts">
	import { components } from '@typematter/svelte-mdast';
	import { Unist } from '@typematter/svelte-unist';
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
