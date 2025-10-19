import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import TableRow from './table-row.svelte';
vi.mock('$lib/components/table/index.js', async () => {
    const actual = await vi.importActual('$lib/components/table/index.js');
    return {
        ...actual,
        getTableContext: vi.fn().mockReturnValue({
            getAlign: vi.fn().mockReturnValue(null)
        })
    };
});
describe('TableRow', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('tableRow', [u('tableCell', [u('text', { value: 'Hello, World!' })])]),
            components: { tableRow: TableRow }
        }
    });
    it('renders <tr>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('tr')).toBeInTheDocument();
    });
    it('renders <tr> with content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('tr')).toHaveTextContent('Hello, World!');
    });
});
