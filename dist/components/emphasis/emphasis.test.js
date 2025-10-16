import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Emphasis from './emphasis.svelte';
describe('Emphasis', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('emphasis', {
                children: [u('text', { value: 'Hello, World!' })]
            }),
            components: { emphasis: Emphasis }
        }
    });
    it('renders <em>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('em')).toBeInTheDocument();
    });
    it('renders <em> with content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('em')).toHaveTextContent('Hello, World!');
    });
});
