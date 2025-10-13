import { mount } from 'svelte';
import { describe, expect, test } from 'vitest';
import Table from './table.svelte';
describe('Table.svelte', () => {
    const it = test.extend({
        props: {
            node: {
                type: 'table',
                children: [
                    {
                        type: 'tableRow',
                        children: [
                            {
                                type: 'tableCell',
                                children: [{ type: 'text', value: 'Hello, World!' }]
                            }
                        ]
                    }
                ]
            }
        }
    });
    it('renders <table>', ({ props }) => {
        mount(Table, { props, target: document.body });
        expect(document.body.querySelector('table')).toBeInTheDocument();
    });
    it('renders <table> with content', ({ props }) => {
        mount(Table, { props, target: document.body });
        expect(document.body.querySelector('table')).toHaveTextContent('Hello, World!');
    });
});
