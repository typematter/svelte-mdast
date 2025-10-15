import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Html from './html.svelte';
describe('Html', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            node: {
                type: 'html',
                value: '<pre>Hello, World!</pre>'
            }
        }
    });
    it('renders html', ({ props }) => {
        mount(Html, { props, target: document.body });
        expect(document.body.querySelector('pre')).toBeInTheDocument();
    });
});
