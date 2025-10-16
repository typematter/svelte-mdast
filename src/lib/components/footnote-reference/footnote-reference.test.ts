import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import FootnoteReference from './footnote-reference.svelte';

describe('FootnoteReference', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('footnoteReference', {
				label: 'Example',
				identifier: 'example'
			}),
			components: { footnoteReference: FootnoteReference }
		}
	});

	it('renders <sup>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('sup')).toBeInTheDocument();
	});

	it('renders <a> in <sup>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('sup > a')).toBeInTheDocument();
	});

	it('renders <a> in <sup> with `id` attribute', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('sup > a')).toHaveAttribute('id', 'footnote-ref-example');
	});

	it('renders <a> in <sup> with `href` attribute', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('sup > a')).toHaveAttribute('href', '#footnote-example');
	});

	it('renders <a> in <sup> with `aria-describedby', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('sup > a')).toHaveAttribute(
			'aria-describedby',
			'footnote-label'
		);
	});

	it('renders <a> in <sup> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('sup > a')).toHaveTextContent('Example');
	});
});
