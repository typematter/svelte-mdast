import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import { Break } from './index.js';
describe('Break', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('break'),
            components: { break: Break }
        }
    });
    it('renders <br>', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body.querySelector('br')).toBeInTheDocument();
    });
});
