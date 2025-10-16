import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { describe, expect, test } from 'vitest';
import Root from './root.svelte';

describe('Root', () => {
	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('root', [u('paragraph', [u('text', { value: 'Hello, World!' })])]),
			components: { root: Root }
		}
	});

	it('renders children', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body).toHaveTextContent('Hello, World!');
	});
});
