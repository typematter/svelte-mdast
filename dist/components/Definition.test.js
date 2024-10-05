import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Definition from './Definition.svelte';
describe('Definition.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            type: 'definition',
            identifier: 'example',
            url: 'https://example.com'
        }
    });
    it('renders nothing', ({ props }) => {
        mount(Definition, { props, target: document.body });
        expect(document.body).toHaveTextContent('');
    });
});
