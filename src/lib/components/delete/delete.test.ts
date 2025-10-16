import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Delete from './delete.svelte';

describe('Delete', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('delete', {
				children: [u('text', { value: 'Hello, World!' })]
			}),
			components: { delete: Delete }
		}
	});

	it('renders <del>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('del')).toBeInTheDocument();
	});

	it('renders <del> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('del')).toHaveTextContent('Hello, World!');
	});
});
