import { mount } from 'svelte';
import { describe, expect, test } from 'vitest';
import Strong from './strong.svelte';
describe('Strong.svelte', () => {
    const it = test.extend({
        props: {
            node: {
                children: [
                    {
                        type: 'text',
                        value: 'Hello, World!'
                    }
                ],
                type: 'strong'
            }
        }
    });
    it('renders <strong>', ({ props }) => {
        mount(Strong, { props, target: document.body });
        expect(document.body.querySelector('strong')).toBeInTheDocument();
    });
    it('renders <strong> with content', ({ props }) => {
        mount(Strong, { props, target: document.body });
        expect(document.body.querySelector('strong')).toHaveTextContent('Hello, World!');
    });
});
