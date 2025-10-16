import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import List from './list.svelte';
describe('List', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    for (const ordered of [undefined, false, true]) {
        const it = test.extend({
            props: {
                ast: u('list', { ordered }, [
                    u('listItem', [u('paragraph', [u('text', { value: 'Hello, World!' })])])
                ]),
                components: { list: List }
            }
        });
        if (ordered === true) {
            describe('when `ordered` is `true`', () => {
                it('renders <ol>', ({ props }) => {
                    mount(Unist, { props, target: document.body });
                    expect(document.body.querySelector('ol')).toBeInTheDocument();
                });
            });
        }
        if (ordered === true) {
            describe('when `ordered` is `true`', () => {
                it('renders <ol>', ({ props }) => {
                    mount(Unist, { props, target: document.body });
                    expect(document.body.querySelector('ol')).toBeInTheDocument();
                });
                it('renders <ol> with content', ({ props }) => {
                    mount(Unist, { props, target: document.body });
                    expect(document.body.querySelector('ol')).toHaveTextContent('Hello, World!');
                });
                describe('and `start` is defined', () => {
                    it('renders <ol> with a `start` attribute', ({ props }) => {
                        mount(Unist, {
                            props: { ...props, ast: { ...props.ast, start: 2 } },
                            target: document.body
                        });
                        expect(document.body.querySelector('ol')).toHaveAttribute('start', '2');
                    });
                });
            });
        }
        else {
            describe('when `ordered` is `undefined` or `false`', () => {
                it('renders <ul>', ({ props }) => {
                    mount(Unist, { props, target: document.body });
                    expect(document.body.querySelector('ul')).toBeInTheDocument();
                });
                it('renders <ul> with content', ({ props }) => {
                    mount(Unist, { props, target: document.body });
                    expect(document.body.querySelector('ul')).toHaveTextContent('Hello, World!');
                });
            });
        }
    }
});
