import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Image from './image.svelte';

describe('Image', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('image', {
				url: 'https://example.com/image.jpg',
				alt: 'Example'
			}),
			components: { image: Image }
		}
	});

	it('renders <img>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('img')).toBeInTheDocument();
	});

	it('renders <img>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('img')).toBeInTheDocument();
	});

	it('renders <img> with `src` attribute', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('img')).toHaveAttribute(
			'src',
			'https://example.com/image.jpg'
		);
	});

	it('renders <img> with `alt` attribute', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('img')).toHaveAttribute('alt', 'Example');
	});
});
