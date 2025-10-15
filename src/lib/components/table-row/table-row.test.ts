import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import TableRow from './table-row.svelte';

describe('TableRow', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof TableRow> }>({
		props: {
			node: {
				type: 'tableRow',
				children: [
					{
						type: 'tableCell',
						children: [
							{
								type: 'text',
								value: 'Hello, World!'
							}
						]
					}
				]
			}
		}
	});

	it('renders <tr>', ({ props }) => {
		mount(TableRow, { props, target: document.body });

		expect(document.body.querySelector('tr')).toBeInTheDocument();
	});

	it('renders <tr> with content', ({ props }) => {
		mount(TableRow, { props, target: document.body });

		expect(document.body.querySelector('tr')).toHaveTextContent('Hello, World!');
	});
});
