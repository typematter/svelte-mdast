import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Blockquote from './blockquote.svelte';
describe('BlockQuote.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            node: {
                children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
                type: 'blockquote'
            }
        }
    });
    it('renders <blockquote>', ({ props }) => {
        mount(Blockquote, { props, target: document.body });
        expect(document.body.querySelector('blockquote')).toBeInTheDocument();
    });
    it('renders <blockquote> with content', ({ props }) => {
        mount(Blockquote, { props, target: document.body });
        expect(document.body.querySelector('blockquote')).toHaveTextContent('Hello, World!');
    });
});
