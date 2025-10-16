import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Strong from './strong.svelte';
describe('Strong', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('strong', [u('text', { value: 'Hello, World!' })]),
            components: { strong: Strong }
        }
    });
    it('renders <strong>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('strong')).toBeInTheDocument();
    });
    it('renders <strong> with content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('strong')).toHaveTextContent('Hello, World!');
    });
});
