import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import ThematicBreak from './thematic-break.svelte';
describe('ThematicBreak', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('thematicBreak'),
            components: { thematicBreak: ThematicBreak }
        }
    });
    it('renders <hr>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('hr')).toBeInTheDocument();
    });
});
