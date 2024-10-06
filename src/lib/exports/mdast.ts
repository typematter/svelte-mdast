import type definitionBuilder from '$lib/builders/definition-builder.js';
import Blockquote from '$lib/components/Blockquote.svelte';
import Break from '$lib/components/Break.svelte';
import Code from '$lib/components/Code.svelte';
import Definition from '$lib/components/Definition.svelte';
import Delete from '$lib/components/Delete.svelte';
import Emphasis from '$lib/components/Emphasis.svelte';
import FootnoteDefinition from '$lib/components/FootnoteDefinition.svelte';
import FootnoteReference from '$lib/components/FootnoteReference.svelte';
import Heading from '$lib/components/Heading.svelte';
import Html from '$lib/components/Html.svelte';
import Image from '$lib/components/Image.svelte';
import ImageReference from '$lib/components/ImageReference.svelte';
import InlineCode from '$lib/components/InlineCode.svelte';
import Link from '$lib/components/Link.svelte';
import LinkReference from '$lib/components/LinkReference.svelte';
import List from '$lib/components/List.svelte';
import ListItem from '$lib/components/ListItem.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import Root from '$lib/components/Root.svelte';
import Strong from '$lib/components/Strong.svelte';
import Table from '$lib/components/Table.svelte';
import TableCell from '$lib/components/TableCell.svelte';
import TableRow from '$lib/components/TableRow.svelte';
import Text from '$lib/components/Text.svelte';
import ThematicBreak from '$lib/components/ThematicBreak.svelte';
import Yaml from '$lib/components/Yaml.svelte';
import type { Components } from '@accuser/svelte-unist';

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

	export interface Context {
		getDefinition: ReturnType<typeof definitionBuilder>;
	}
}

export const components: Components = {
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
};
