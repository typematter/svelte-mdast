import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Heading from './heading.svelte';

describe('Heading', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	for (const depth of [1, 2, 3, 4, 5, 6] as const) {
		const it = test.extend<{
			props: ComponentProps<typeof Heading>;
		}>({
			props: {
				node: {
					children: [{ type: 'text', value: 'Hello, World!' }],
					depth,
					type: 'heading'
				}
			}
		});

		it(`renders <h${depth}>`, ({ props }) => {
			mount(Heading, { props, target: document.body });

			expect(document.body.querySelector(`h${depth}`)).toBeInTheDocument();
		});

		it(`renders <h${depth}> with \`id\` attibute`, ({ props }) => {
			mount(Heading, { props, target: document.body });

			expect(document.body.querySelector(`h${depth}`)).toHaveAttribute('id', 'hello-world');
		});

		it(`renders <h${depth}> with content`, ({ props }) => {
			mount(Heading, { props, target: document.body });

			expect(document.body.querySelector(`h${depth}`)).toHaveTextContent('Hello, World!');
		});
	}
});
