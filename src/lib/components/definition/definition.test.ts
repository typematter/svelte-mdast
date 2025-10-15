import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Definition from './definition.svelte';

describe('Definition', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Definition> }>({
		props: {
			node: {
				type: 'definition',
				identifier: 'example',
				url: 'https://example.com'
			}
		}
	});

	it('renders nothing', ({ props }) => {
		mount(Definition, { props, target: document.body });

		expect(document.body).toHaveTextContent('');
	});
});
