import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import FootnoteDefinition from './footnote-definition.svelte';
describe('FootnoteDefinition', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('footnoteDefinition', {
                identifier: '1',
                label: '1'
            }, [
                u('paragraph', [
                    u('text', {
                        value: 'Hello, World!'
                    })
                ])
            ]),
            components: { footnoteDefinition: FootnoteDefinition }
        }
    });
    it('renders <div>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('div')).toBeInTheDocument();
    });
    it('renders <div> with `id` attribute', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-id-1')).toBeInTheDocument();
    });
    it('renders <p> in <div>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-id-1 > p')).toBeInTheDocument();
    });
    it('renders <p> in <div> with `label` content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-id-1 > p')).toHaveTextContent('1');
    });
    it('renders <a> in <div>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-id-1 > a')).toBeInTheDocument();
    });
    it('renders <a> in <div> with `href` attribute', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-id-1 > a')).toHaveAttribute('href', '#footnote-ref-id-1');
    });
    it('renders <a> in <div> with `aria-label', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-id-1 > a')).toHaveAttribute('aria-label', 'Back to content');
    });
    it('renders <a> in <div> with content', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-id-1 a')).toHaveTextContent('↩');
    });
});
