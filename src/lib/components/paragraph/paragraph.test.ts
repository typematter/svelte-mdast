import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { describe, expect, test } from 'vitest';
import Paragraph from './paragraph.svelte';

describe('Paragraph', () => {
	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('paragraph', [u('text', { value: 'Hello, World!' })]),
			components: { paragraph: Paragraph }
		}
	});

	it('renders <p>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('p')).toBeInTheDocument();
	});

	it('renders <p> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('p')).toHaveTextContent('Hello, World!');
	});
});
