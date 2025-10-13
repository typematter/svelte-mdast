import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Emphasis from './emphasis.svelte';
describe('Emphasis.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            node: {
                children: [{ type: 'text', value: 'Hello, World!' }],
                type: 'emphasis'
            }
        }
    });
    it('renders <em>', ({ props }) => {
        mount(Emphasis, { props, target: document.body });
        expect(document.body.querySelector('em')).toBeInTheDocument();
    });
    it('renders <em> with content', ({ props }) => {
        mount(Emphasis, { props, target: document.body });
        expect(document.body.querySelector('em')).toHaveTextContent('Hello, World!');
    });
});
