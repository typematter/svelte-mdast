import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import LinkReference from './link-reference.svelte';

vi.mock('$lib/contexts/markdown-context.js', async () => {
	const actual = await vi.importActual('$lib/contexts/markdown-context.js');

	return {
		...actual,
		getMarkdownContext: vi.fn().mockReturnValue({
			getDefinition: vi.fn().mockReturnValue({
				title: 'Example',
				url: 'https://example.com'
			})
		})
	};
});

describe('LinkReference.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{
		props: ComponentProps<typeof LinkReference>;
	}>({
		props: {
			node: {
				type: 'linkReference',
				identifier: 'example',
				referenceType: 'full',
				children: [{ type: 'text', value: 'Hello, World!' }]
			}
		}
	});

	it('renders <a>', ({ props }) => {
		mount(LinkReference, { props, target: document.body });

		expect(document.body.querySelector('a')).toBeInTheDocument();
	});

	it('renders <a> with `href` attibute', ({ props }) => {
		mount(LinkReference, { props, target: document.body });

		expect(document.body.querySelector('a')).toHaveAttribute('href', 'https://example.com');
	});

	it('renders <a> with `title` attibute', ({ props }) => {
		mount(LinkReference, { props, target: document.body });

		expect(document.body.querySelector('a')).toHaveAttribute('title', 'Example');
	});

	it('renders <a> with content', ({ props }) => {
		mount(LinkReference, { props, target: document.body });

		expect(document.body.querySelector('a')).toHaveTextContent('Hello, World!');
	});
});
