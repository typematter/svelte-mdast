import { Unist } from '@typematter/svelte-unist';
import { mount, type ComponentProps } from 'svelte';
import { u } from 'unist-builder';
import { beforeEach, describe, expect, test } from 'vitest';
import ListItem from './list-item.svelte';

describe('ListItem', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Unist> }>({
		props: {
			ast: u('listItem', [u('paragraph', [u('text', { value: 'Hello, World!' })])]),
			components: { listItem: ListItem }
		}
	});

	it('renders <li>', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('li')).toBeInTheDocument();
	});

	it('renders <li> with content', ({ props }) => {
		mount(Unist, { props, target: document.body });

		expect(document.body.querySelector('li')).toHaveTextContent('Hello, World!');
	});

	describe('when `checked` is true', () => {
		const taskIt = test.extend<{ props: ComponentProps<typeof Unist> }>({
			props: {
				ast: u('listItem', { checked: true }, [
					u('paragraph', [u('text', { value: 'Done task' })])
				]),
				components: { listItem: ListItem }
			}
		});

		taskIt('renders checkbox input', ({ props }) => {
			mount(Unist, { props, target: document.body });

			expect(document.body.querySelector('input[type="checkbox"]')).toBeInTheDocument();
		});

		taskIt('renders checked checkbox', ({ props }) => {
			mount(Unist, { props, target: document.body });

			expect(document.body.querySelector('input[type="checkbox"]')).toBeChecked();
		});

		taskIt('renders disabled checkbox', ({ props }) => {
			mount(Unist, { props, target: document.body });

			expect(document.body.querySelector('input[type="checkbox"]')).toBeDisabled();
		});
	});

	describe('when `checked` is false', () => {
		const taskIt = test.extend<{ props: ComponentProps<typeof Unist> }>({
			props: {
				ast: u('listItem', { checked: false }, [
					u('paragraph', [u('text', { value: 'Todo task' })])
				]),
				components: { listItem: ListItem }
			}
		});

		taskIt('renders checkbox input', ({ props }) => {
			mount(Unist, { props, target: document.body });

			expect(document.body.querySelector('input[type="checkbox"]')).toBeInTheDocument();
		});

		taskIt('renders unchecked checkbox', ({ props }) => {
			mount(Unist, { props, target: document.body });

			expect(document.body.querySelector('input[type="checkbox"]')).not.toBeChecked();
		});
	});

	describe('when `checked` is null', () => {
		const taskIt = test.extend<{ props: ComponentProps<typeof Unist> }>({
			props: {
				ast: u('listItem', { checked: null }, [
					u('paragraph', [u('text', { value: 'Regular item' })])
				]),
				components: { listItem: ListItem }
			}
		});

		taskIt('does not render checkbox input', ({ props }) => {
			mount(Unist, { props, target: document.body });

			expect(document.body.querySelector('input[type="checkbox"]')).not.toBeInTheDocument();
		});
	});

	describe('when `spread` is true', () => {
		const spreadIt = test.extend<{ props: ComponentProps<typeof Unist> }>({
			props: {
				ast: u('listItem', { spread: true }, [
					u('paragraph', [u('text', { value: 'Spread item' })])
				]),
				components: { listItem: ListItem }
			}
		});

		spreadIt('renders <li> with spread class', ({ props }) => {
			mount(Unist, { props, target: document.body });

			expect(document.body.querySelector('li')).toHaveClass('spread');
		});
	});
});
