<script lang="ts" module>
	declare module '@accuser/svelte-unist' {
		export interface ComponentMap {
			blockquote: import('mdast').Blockquote;
			break: import('mdast').Break;
			code: import('mdast').Code;
			definition: import('mdast').Definition;
			delete: import('mdast').Delete;
			emphasis: import('mdast').Emphasis;
			footnoteDefinition: import('mdast').FootnoteDefinition;
			footnoteReference: import('mdast').FootnoteReference;
			heading: import('mdast').Heading;
			html: import('mdast').Html;
			image: import('mdast').Image;
			imageReference: import('mdast').ImageReference;
			inlineCode: import('mdast').InlineCode;
			link: import('mdast').Link;
			linkReference: import('mdast').LinkReference;
			list: import('mdast').List;
			listItem: import('mdast').ListItem;
			paragraph: import('mdast').Paragraph;
			root: import('mdast').Root;
			strong: import('mdast').Strong;
			table: import('mdast').Table;
			tableCell: import('mdast').TableCell;
			tableRow: import('mdast').TableRow;
			text: import('mdast').Text;
			thematicBreak: import('mdast').ThematicBreak;
			yaml: import('mdast').Yaml;
		}

		export interface UnistContext {
			getDefinition: ReturnType<typeof definitionBuilder>;
		}
	}
</script>

<script lang="ts">
	import definitionBuilder from '$lib/builders/definition-builder.js';
	import * as Unist from '@accuser/svelte-unist';
	import type { ComponentProps } from 'svelte';
	import Blockquote from './blockquote.svelte';
	import Break from './break.svelte';
	import Code from './code.svelte';
	import Definition from './definition.svelte';
	import Delete from './delete.svelte';
	import Emphasis from './emphasis.svelte';
	import FootnoteDefinition from './footnote-definition.svelte';
	import FootnoteReference from './footnote-reference.svelte';
	import Heading from './heading.svelte';
	import Html from './html.svelte';
	import ImageReference from './image-reference.svelte';
	import Image from './image.svelte';
	import InlineCode from './inline-code.svelte';
	import LinkReference from './link-reference.svelte';
	import Link from './link.svelte';
	import ListItem from './list-item.svelte';
	import List from './list.svelte';
	import Paragraph from './paragraph.svelte';
	import Root from './root.svelte';
	import Strong from './strong.svelte';
	import TableCell from './table-cell.svelte';
	import TableRow from './table-row.svelte';
	import Table from './table.svelte';
	import Text from './text.svelte';
	import ThematicBreak from './thematic-break.svelte';
	import Yaml from './yaml.svelte';

	const defaultComponents = {
		blockquote: Blockquote,
		break: Break,
		code: Code,
		definition: Definition,
		delete: Delete,
		emphasis: Emphasis,
		footnoteDefinition: FootnoteDefinition,
		footnoteReference: FootnoteReference,
		heading: Heading,
		html: Html,
		image: Image,
		imageReference: ImageReference,
		inlineCode: InlineCode,
		link: Link,
		linkReference: LinkReference,
		list: List,
		listItem: ListItem,
		paragraph: Paragraph,
		root: Root,
		strong: Strong,
		table: Table,
		tableCell: TableCell,
		tableRow: TableRow,
		text: Text,
		thematicBreak: ThematicBreak,
		yaml: Yaml
	} satisfies Unist.Components;

	let {
		ast,
		components,
		...rest
	}: { ast: import('mdast').Root } & ComponentProps<typeof Unist.Root> = $props();

	let context = { getDefinition: () => definitionBuilder(ast) };
</script>

<Unist.Root {ast} components={{ ...defaultComponents, ...components }} {...context} {...rest} />
