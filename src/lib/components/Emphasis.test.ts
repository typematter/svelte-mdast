import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Emphasis from './Emphasis.svelte';

describe('Emphasis.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Emphasis> }>({
		props: {
			children: [{ type: 'text', value: 'Hello, World!' }],
			type: 'emphasis'
		}
	});

	it('renders <em>', ({ props }) => {
		mount(Emphasis, { props, target: document.body });

		expect(document.body.querySelector('em')).toBeInTheDocument();
	});

	it('renders <em> with content', ({ props }) => {
		mount(Emphasis, { props, target: document.body });

		expect(document.body.querySelector('em')).toHaveTextContent('Hello, World!');
	});
});
