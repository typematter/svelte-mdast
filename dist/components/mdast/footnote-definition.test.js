import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import FootnoteDefinition from './footnote-definition.svelte';
describe('FootnoteDefinition.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            node: {
                type: 'footnoteDefinition',
                identifier: '1',
                children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, World!' }] }],
                label: '1'
            }
        }
    });
    it('renders <div>', ({ props }) => {
        mount(FootnoteDefinition, { props, target: document.body });
        expect(document.body.querySelector('div')).toBeInTheDocument();
    });
    it('renders <div> with `id` attribute', ({ props }) => {
        mount(FootnoteDefinition, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-1')).toBeInTheDocument();
    });
    it('renders <p> in <div>', ({ props }) => {
        mount(FootnoteDefinition, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-1 > p')).toBeInTheDocument();
    });
    it('renders <p> in <div> with `label` content', ({ props }) => {
        mount(FootnoteDefinition, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-1 > p')).toHaveTextContent('1');
    });
    it('renders <a> in <div>', ({ props }) => {
        mount(FootnoteDefinition, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-1 > a')).toBeInTheDocument();
    });
    it('renders <a> in <div> with `href` attribute', ({ props }) => {
        mount(FootnoteDefinition, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-1 > a')).toHaveAttribute('href', '#footnote-ref-1');
    });
    it('renders <a> in <div> with `aria-label', ({ props }) => {
        mount(FootnoteDefinition, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-1 > a')).toHaveAttribute('aria-label', 'Back to content');
    });
    it('renders <a> in <div> with content', ({ props }) => {
        mount(FootnoteDefinition, { props, target: document.body });
        expect(document.body.querySelector('div#footnote-1 a')).toHaveTextContent('↩');
    });
});
