import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Blockquote from './blockquote.svelte';

describe('BlockQuote', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('blockquote', [u('paragraph', [u('text', { value: 'Hello, World!' })])]),
			components: {
				blockquote: Blockquote
			}
		}
	});

	it('renders <blockquote>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('blockquote')).toBeInTheDocument();
	});

	it('renders <blockquote> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('blockquote')).toHaveTextContent('Hello, World!');
	});
});
