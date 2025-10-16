import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Root from './root.svelte';
describe('Root', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('root', [u('paragraph', [u('text', { value: 'Hello, World!' })])]),
            components: { root: Root }
        }
    });
    it('renders children', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body).toHaveTextContent('Hello, World!');
    });
});
