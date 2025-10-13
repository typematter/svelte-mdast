import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import List from './list.svelte';

describe('List.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	for (const ordered of [undefined, false, true]) {
		const it = test.extend<{ props: ComponentProps<typeof List> }>({
			props: {
				node: {
					children: [
						{
							type: 'listItem',
							children: [
								{
									type: 'paragraph',
									children: [{ type: 'text', value: 'Hello, World!' }]
								}
							]
						}
					],
					type: 'list',
					ordered
				}
			}
		});

		if (ordered === true) {
			describe('when `ordered` is `true`', () => {
				it('renders <ol>', ({ props }) => {
					mount(List, { props, target: document.body });

					expect(document.body.querySelector('ol')).toBeInTheDocument();
				});

				it('renders <ol> with content', ({ props }) => {
					mount(List, { props, target: document.body });

					expect(document.body.querySelector('ol li')).toHaveTextContent('Hello, World!');
				});

				describe('and `start` is defined', () => {
					it('renders <ol> with a `start` attribute', ({ props }) => {
						mount(List, { props: { ...props, start: 2 }, target: document.body });

						expect(document.body.querySelector('ol')).toHaveAttribute('start', '2');
					});
				});
			});
		} else {
			describe('when `ordered` is `undefined` or `false`', () => {
				it('renders <ul>', ({ props }) => {
					mount(List, { props, target: document.body });

					expect(document.body.querySelector('ul')).toBeInTheDocument();
				});

				it('renders <ul> with content', ({ props }) => {
					mount(List, { props, target: document.body });

					expect(document.body.querySelector('ul li')).toHaveTextContent('Hello, World!');
				});
			});
		}
	}
});
