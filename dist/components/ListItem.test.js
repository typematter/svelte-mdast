import { mount } from 'svelte';
import { describe, expect, test } from 'vitest';
import ListItem from './ListItem.svelte';
describe('ListItem.svelte', () => {
    const it = test.extend({
        props: {
            children: [
                {
                    type: 'paragraph',
                    children: [{ type: 'text', value: 'Hello, World!' }]
                }
            ],
            type: 'listItem'
        }
    });
    it('renders <li>', ({ props }) => {
        mount(ListItem, { props, target: document.body });
        expect(document.body.querySelector('li')).toBeInTheDocument();
    });
    it('renders <li> with content', ({ props }) => {
        mount(ListItem, { props, target: document.body });
        expect(document.body.querySelector('li')).toHaveTextContent('Hello, World!');
    });
});
