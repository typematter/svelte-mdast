import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Code from './code.svelte';

describe('Code.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Code> }>({
		props: {
			node: { lang: 'javascript', type: 'code', value: 'console.log("Hello, World!");' }
		}
	});

	it('renders <pre>', ({ props }) => {
		mount(Code, { props, target: document.body });

		expect(document.body.querySelector('pre')).toBeInTheDocument();
	});

	it('renders <code> in <pre>', ({ props }) => {
		mount(Code, { props, target: document.body });

		expect(document.body.querySelector('pre > code')).toBeInTheDocument();
	});

	it('renders <code> in <pre> with `lang` attribute', ({ props }) => {
		mount(Code, { props, target: document.body });

		expect(document.body.querySelector('pre > code')).toHaveAttribute('lang', 'javascript');
	});

	it('renders <code> in <pre> with content', ({ props }) => {
		mount(Code, { props, target: document.body });

		expect(document.body.querySelector('pre > code[lang="javascript"]')).toHaveTextContent(
			'console.log("Hello, World!");'
		);
	});
});
