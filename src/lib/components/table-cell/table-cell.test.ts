import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import TableCell from './table-cell.svelte';

describe('TableCell', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{
		props: ComponentProps<typeof Unist>;
	}>({
		props: {
			ast: u('tableCell', [u('text', { value: 'Hello, World!' })]),
			components: { tableCell: TableCell }
		}
	});

	it('renders <td>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('td')).toBeInTheDocument();
	});

	it('renders <td>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('td')).toBeInTheDocument();
	});

	it('renders <td> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('td')).toHaveTextContent('Hello, World!');
	});
});
