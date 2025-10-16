import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import InlineCode from './inline-code.svelte';

describe('InlineCode', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('inlineCode', {
				value: 'console.log("Hello, World!");'
			}),
			components: { inlineCode: InlineCode }
		}
	});

	it('renders <code>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('code')).toBeInTheDocument();
	});

	it('renders <code> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('code')).toHaveTextContent('console.log("Hello, World!");');
	});
});
