import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import ThematicBreak from './ThematicBreak.svelte';

describe('ThematicBreak.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof ThematicBreak> }>({
		props: {
			type: 'thematicBreak'
		}
	});

	it('renders <hr>', ({ props }) => {
		mount(ThematicBreak, { props, target: document.body });

		expect(document.body.querySelector('hr')).toBeInTheDocument();
	});
});
