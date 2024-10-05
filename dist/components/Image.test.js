import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Image from './Image.svelte';
describe('Image.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            type: 'image',
            url: 'https://example.com/image.jpg',
            alt: 'Example'
        }
    });
    it('renders <img>', ({ props }) => {
        mount(Image, { props, target: document.body });
        expect(document.body.querySelector('img')).toBeInTheDocument();
    });
    it('renders <img> with `src` attribute', ({ props }) => {
        mount(Image, { props, target: document.body });
        expect(document.body.querySelector('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
    });
    it('renders <img> with `alt` attribute', ({ props }) => {
        mount(Image, { props, target: document.body });
        expect(document.body.querySelector('img')).toHaveAttribute('alt', 'Example');
    });
});
