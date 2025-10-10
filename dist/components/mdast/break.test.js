import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Break from './break.svelte';
describe('Break.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: { node: { type: 'break' } }
    });
    it('renders <br>', ({ props }) => {
        mount(Break, { props, target: document.body });
        expect(document.body.querySelector('br')).toBeInTheDocument();
    });
});
