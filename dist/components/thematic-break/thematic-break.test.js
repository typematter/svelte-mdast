import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import ThematicBreak from './thematic-break.svelte';
describe('ThematicBreak', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            node: {
                type: 'thematicBreak'
            }
        }
    });
    it('renders <hr>', ({ props }) => {
        mount(ThematicBreak, { props, target: document.body });
        expect(document.body.querySelector('hr')).toBeInTheDocument();
    });
});
