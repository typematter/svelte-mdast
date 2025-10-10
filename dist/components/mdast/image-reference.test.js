import { mount } from 'svelte';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import ImageReference from './image-reference.svelte';
vi.mock('$lib/contexts/markdown-context.js', async () => {
    const actual = await vi.importActual('$lib/contexts/markdown-context.js');
    return {
        ...actual,
        getMarkdownContext: vi.fn().mockReturnValue({
            getDefinition: vi.fn().mockReturnValue({
                title: 'Example',
                url: 'https://example.com/image.jpg'
            })
        })
    };
});
describe('ImageReference.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            node: {
                type: 'imageReference',
                alt: 'Example',
                identifier: 'example',
                referenceType: 'full'
            }
        }
    });
    it('renders <img>', ({ props }) => {
        mount(ImageReference, { props, target: document.body });
        expect(document.body.querySelector('img')).toBeInTheDocument();
    });
    it('renders <img> with `src` attribute', ({ props }) => {
        mount(ImageReference, { props, target: document.body });
        expect(document.body.querySelector('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
    });
    it('renders <img> with `alt` attribute', ({ props }) => {
        mount(ImageReference, { props, target: document.body });
        expect(document.body.querySelector('img')).toHaveAttribute('alt', 'Example');
    });
});
