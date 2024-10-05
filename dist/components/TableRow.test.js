import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import TableRow from './TableRow.svelte';
describe('TableRow.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            type: 'tableRow',
            children: [
                {
                    type: 'tableCell',
                    children: [
                        {
                            type: 'text',
                            value: 'Hello, World!'
                        }
                    ]
                }
            ]
        }
    });
    it('renders <tr>', ({ props }) => {
        mount(TableRow, { props, target: document.body });
        expect(document.body.querySelector('tr')).toBeInTheDocument();
    });
    it('renders <tr> with content', ({ props }) => {
        mount(TableRow, { props, target: document.body });
        expect(document.body.querySelector('tr')).toHaveTextContent('Hello, World!');
    });
});
