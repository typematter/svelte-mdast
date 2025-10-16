import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Link from './link.svelte';
describe('Link', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('link', {
                url: 'https://example.com'
            }, [u('text', { value: 'Hello, World!' })]),
            components: { link: Link }
        }
    });
    it('renders <a>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('a')).toBeInTheDocument();
    });
    it('renders <a> with `href` attibute', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('a')).toHaveAttribute('href', 'https://example.com');
    });
    it('renders <a> with content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('a')).toHaveTextContent('Hello, World!');
    });
});
