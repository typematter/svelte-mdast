import { mount } from 'svelte';
import { describe, expect, test } from 'vitest';
import Paragraph from './paragraph.svelte';
describe('Paragraph.svelte', () => {
    const it = test.extend({
        props: {
            node: {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        value: 'Hello, World!'
                    }
                ]
            }
        }
    });
    it('renders <p>', ({ props }) => {
        mount(Paragraph, { props, target: document.body });
        expect(document.body.querySelector('p')).toBeInTheDocument();
    });
    it('renders <p> with content', ({ props }) => {
        mount(Paragraph, { props, target: document.body });
        expect(document.body.querySelector('p')).toHaveTextContent('Hello, World!');
    });
});
