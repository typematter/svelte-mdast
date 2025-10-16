import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { describe, expect, test } from 'vitest';
import ListItem from './list-item.svelte';
describe('ListItem', () => {
    const it = test.extend({
        props: {
            ast: u('listItem', [u('paragraph', [u('text', { value: 'Hello, World!' })])]),
            components: { listItem: ListItem }
        }
    });
    it('renders <li>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('li')).toBeInTheDocument();
    });
    it('renders <li> with content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('li')).toHaveTextContent('Hello, World!');
    });
});
