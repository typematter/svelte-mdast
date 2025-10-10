import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Yaml from './yaml.svelte';
describe('Yaml.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            node: {
                type: 'yaml',
                value: 'key: value'
            }
        }
    });
    it('renders nothing', ({ props }) => {
        mount(Yaml, { props, target: document.body });
        expect(document.body).toHaveTextContent('');
    });
});
