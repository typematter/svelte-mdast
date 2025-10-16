import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Code from './code.svelte';
describe('Code', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('code', { lang: 'javascript', value: 'console.log("Hello, World!");' }),
            components: { code: Code }
        }
    });
    it('renders <pre>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('pre')).toBeInTheDocument();
    });
    it('renders <code> in <pre>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('pre > code')).toBeInTheDocument();
    });
    it('renders <code> in <pre> with `lang` attribute', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('pre > code')).toHaveAttribute('lang', 'javascript');
    });
    it('renders <code> in <pre> with content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('pre > code[lang="javascript"]')).toHaveTextContent('console.log("Hello, World!");');
    });
});
