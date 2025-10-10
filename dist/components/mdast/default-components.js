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
export const defaultComponents = {
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
