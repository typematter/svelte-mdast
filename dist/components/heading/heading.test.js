import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Heading from './heading.svelte';
vi.mock('$lib/components/root/index.js', async () => {
    const actual = await vi.importActual('$lib/components/root/index.js');
    return {
        ...actual,
        getRootContext: vi.fn().mockReturnValue({
            getHeadingId: vi.fn().mockReturnValue('hello-world')
        })
    };
});
describe('Heading', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    for (const depth of [1, 2, 3, 4, 5, 6]) {
        const it = test.extend({
            props: {
                ast: u('heading', { depth }, [u('text', { value: 'Hello, World!' })]),
                components: { heading: Heading }
            }
        });
        it(`renders <h${depth}>`, ({ props }) => {
            mount(Unist, { props, target: document.body });
            expect(document.body.querySelector(`h${depth}`)).toBeInTheDocument();
        });
        it(`renders <h${depth}> with content`, ({ props }) => {
            mount(Unist, { props, target: document.body });
            expect(document.body.querySelector(`h${depth}`)).toHaveTextContent('Hello, World!');
        });
        it(`render <h${depth}> with id`, ({ props }) => {
            mount(Unist, { props, target: document.body });
            expect(document.body.querySelector(`h${depth}`)).toHaveAttribute('id', 'hello-world');
        });
    }
});
