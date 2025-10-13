import { mount, type ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Text from './text.svelte';

describe('Text.svelte', () => {
	const it = test.extend<{ props: ComponentProps<typeof Text> }>({
		props: {
			node: {
				type: 'text',
				value: 'Hello, World!'
			}
		}
	});

	it('renders text', ({ props }) => {
		mount(Text, { props, target: document.body });

		expect(document.body).toHaveTextContent('Hello, World!');
	});
});
