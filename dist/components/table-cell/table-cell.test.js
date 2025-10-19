import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import TableCell from './table-cell.svelte';
vi.mock('$lib/components/table-row/index.js', async () => {
    const actual = await vi.importActual('$lib/components/table-row/index.js');
    return {
        ...actual,
        getTableRowContext: vi.fn().mockReturnValue({
            getAlign: vi.fn().mockReturnValue(null)
        })
    };
});
describe('TableCell', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
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
