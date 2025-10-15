import { mount, type ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import TableCell from './table-cell.svelte';

describe('TableCell', () => {
	const it = test.extend<{
		props: ComponentProps<typeof TableCell>;
	}>({
		props: {
			node: {
				children: [
					{
						type: 'text',
						value: 'Hello, World!'
					}
				],
				type: 'tableCell'
			}
		}
	});

	it('renders <td>', ({ props }) => {
		mount(TableCell, { props, target: document.body });

		expect(document.body.querySelector('td')).toBeInTheDocument();
	});

	it('renders <td> with content', ({ props }) => {
		mount(TableCell, { props, target: document.body });

		expect(document.body.querySelector('td')).toHaveTextContent('Hello, World!');
	});
});
