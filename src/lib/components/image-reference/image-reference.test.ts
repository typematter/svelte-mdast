import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import ImageReference from './image-reference.svelte';

vi.mock('$lib/components/root/index.js', async () => {
	const actual = await vi.importActual('$lib/components/root/index.js');

	return {
		...actual,
		getRootContext: vi.fn().mockReturnValue({
			getDefinition: vi.fn().mockReturnValue({
				title: 'Example',
				url: 'https://example.com/image.jpg'
			})
		})
	};
});

describe('ImageReference', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('imageReference', {
				alt: 'Example',
				identifier: 'example',
				referenceType: 'full'
			}),
			components: { imageReference: ImageReference }
		}
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
