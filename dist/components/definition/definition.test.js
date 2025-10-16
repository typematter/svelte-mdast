import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Definition from './definition.svelte';
describe('Definition', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('definition', {
                identifier: 'example',
                url: 'https://example.com'
            }),
            components: { definition: Definition }
        }
    });
    it('renders nothing', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body).toHaveTextContent('');
    });
});
