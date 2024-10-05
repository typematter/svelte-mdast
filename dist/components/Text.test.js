import { mount } from 'svelte';
import { describe, expect, test } from 'vitest';
import Text from './Text.svelte';
describe('Text.svelte', () => {
    const it = test.extend({
        props: {
            type: 'text',
            value: 'Hello, World!'
        }
    });
    it('renders text', ({ props }) => {
        mount(Text, { props, target: document.body });
        expect(document.body).toHaveTextContent('Hello, World!');
    });
});
