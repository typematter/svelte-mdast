import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import LinkReference from './link-reference.svelte';

vi.mock('$lib/components/root/index.js', async () => {
	const actual = await vi.importActual('$lib/components/root/index.js');

	return {
		...actual,
		getRootContext: vi.fn().mockReturnValue({
			getDefinition: vi.fn().mockReturnValue({
				title: 'Example',
				url: 'https://example.com'
			})
		})
	};
});

describe('LinkReference', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{
		props: ComponentProps<typeof Unist>;
	}>({
		props: {
			ast: u(
				'linkReference',
				{
					identifier: 'example',
					referenceType: 'full'
				},
				[u('text', { value: 'Hello, World!' })]
			),
			components: { linkReference: LinkReference }
		}
	});

	it('renders <a>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('a')).toBeInTheDocument();
	});

	it('renders <a> with `href` attibute', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('a')).toHaveAttribute('href', 'https://example.com');
	});

	it('renders <a> with `title` attibute', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('a')).toHaveAttribute('title', 'Example');
	});

	it('renders <a> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('a')).toHaveTextContent('Hello, World!');
	});
});
