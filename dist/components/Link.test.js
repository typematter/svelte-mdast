import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Link from './Link.svelte';
describe('Link.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            children: [{ type: 'text', value: 'Hello, World!' }],
            type: 'link',
            url: 'https://example.com'
        }
    });
    it('renders <a>', ({ props }) => {
        mount(Link, { props, target: document.body });
        expect(document.body.querySelector('a')).toBeInTheDocument();
    });
    it('renders <a> with `href` attibute', ({ props }) => {
        mount(Link, { props, target: document.body });
        expect(document.body.querySelector('a')).toHaveAttribute('href', 'https://example.com');
    });
    it('renders <a> with content', ({ props }) => {
        mount(Link, { props, target: document.body });
        expect(document.body.querySelector('a')).toHaveTextContent('Hello, World!');
    });
});
