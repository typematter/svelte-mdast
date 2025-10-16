import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Html from './html.svelte';
describe('Html', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('html', { value: '<pre>Hello, World!</pre>' }),
            components: { html: Html }
        }
    });
    it('renders html', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('pre')).toBeInTheDocument();
    });
});
