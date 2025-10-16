import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { describe, expect, test } from 'vitest';
import Table from './table.svelte';

describe('Table', () => {
	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('table', [u('tableRow', [u('tableCell', [u('text', { value: 'Hello, World!' })])])]),
			components: { table: Table }
		}
	});

	it('renders <table>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('table')).toBeInTheDocument();
	});

	it('renders <table> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('table')).toHaveTextContent('Hello, World!');
	});
});
