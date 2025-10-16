import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { describe, expect, test } from 'vitest';
import TableCell from './table-cell.svelte';
describe('TableCell', () => {
    const it = test.extend({
        props: {
            ast: u('tableCell', [u('text', { value: 'Hello, World!' })]),
            components: { tableCell: TableCell }
        }
    });
    it('renders <td>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('td')).toBeInTheDocument();
    });
    it('renders <td>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('td')).toBeInTheDocument();
    });
    it('renders <td> with content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('td')).toHaveTextContent('Hello, World!');
    });
});
