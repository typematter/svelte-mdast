import { Unist } from '@typematter/svelte-unist';
import { mount } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import Yaml from './yaml.svelte';
describe('Yaml', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            ast: u('yaml', 'key: value'),
            components: { yaml: Yaml }
        }
    });
    it('renders nothing', ({ props }) => {
        mount(Unist, { props, target: document.body });
        expect(document.body).toHaveTextContent('');
    });
});
