import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import ImageReference from './image-reference.svelte';
vi.mock('@typematter/svelte-unist', async () => {
    const actual = await vi.importActual('@typematter/svelte-unist');
    return {
        ...actual,
        getUnistContext: vi.fn().mockReturnValue({
            getDefinition: vi.fn().mockReturnValue({
                title: 'Example',
                url: 'https://example.com/image.jpg'
            })
        })
    };
});
describe('ImageReference', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('imageReference', {
                alt: 'Example',
                identifier: 'example',
                referenceType: 'full'
            }), components: { imageReference: ImageReference }
        }
    });
    it('renders <img>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('img')).toBeInTheDocument();
    });
    it('renders <img> with `src` attribute', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
    });
    it('renders <img> with `alt` attribute', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('img')).toHaveAttribute('alt', 'Example');
    });
});
