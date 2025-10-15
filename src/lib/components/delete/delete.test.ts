import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Delete from './delete.svelte';

describe('Delete', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Delete> }>({
		props: {
			node: {
				children: [{ type: 'text', value: 'Hello, World!' }],
				type: 'delete'
			}
		}
	});

	it('renders <del>', ({ props }) => {
		mount(Delete, { props, target: document.body });

		expect(document.body.querySelector('del')).toBeInTheDocument();
	});

	it('renders <del> with content', ({ props }) => {
		mount(Delete, { props, target: document.body });

		expect(document.body.querySelector('del')).toHaveTextContent('Hello, World!');
	});
});
