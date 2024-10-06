import type definitionBuilder from '../builders/definition-builder.js';
declare module '@accuser/svelte-unist' {
    interface ComponentMap {
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
    interface Context {
        getDefinition: ReturnType<typeof definitionBuilder>;
        extensions: import('micromark-util-types').Extension[];
        mdastExtensions: (import('mdast-util-from-markdown').Extension | import('mdast-util-from-markdown').Extension[])[];
    }
    interface Props {
        extensions?: import('micromark-util-types').Extension[];
        mdastExtensions?: (import('mdast-util-from-markdown').Extension | import('mdast-util-from-markdown').Extension[])[];
    }
}
declare const _default: {
    blockquote: import("svelte").Component<import("mdast").Blockquote, {}, "">;
    break: import("svelte").Component<import("mdast").Break, {}, "">;
    code: import("svelte").Component<import("mdast").Code, {}, "">;
    definition: import("svelte").Component<import("mdast").Definition, {}, "">;
    delete: import("svelte").Component<import("mdast").Delete, {}, "">;
    emphasis: import("svelte").Component<import("mdast").Emphasis, {}, "">;
    footnoteDefinition: import("svelte").Component<import("mdast").FootnoteDefinition, {}, "">;
    footnoteReference: import("svelte").Component<import("mdast").FootnoteReference, {}, "">;
    heading: import("svelte").Component<import("mdast").Heading, {}, "">;
    html: import("svelte").Component<import("mdast").Html, {}, "">;
    image: import("svelte").Component<import("mdast").Image, {}, "">;
    imageReference: import("svelte").Component<import("mdast").ImageReference, {}, "">;
    inlineCode: import("svelte").Component<import("mdast").InlineCode, {}, "">;
    link: import("svelte").Component<import("mdast").Link, {}, "">;
    linkReference: import("svelte").Component<import("mdast").LinkReference, {}, "">;
    list: import("svelte").Component<import("mdast").List, {}, "">;
    listItem: import("svelte").Component<import("mdast").ListItem, {}, "">;
    paragraph: import("svelte").Component<import("mdast").Paragraph, {}, "">;
    root: import("svelte").Component<import("mdast").Root, {}, "">;
    strong: import("svelte").Component<import("mdast").Strong, {}, "">;
    table: import("svelte").Component<import("mdast").Table, {}, "">;
    tableCell: import("svelte").Component<import("mdast").TableCell, {}, "">;
    tableRow: import("svelte").Component<import("mdast").TableRow, {}, "">;
    text: import("svelte").Component<import("mdast").Text, {}, "">;
    thematicBreak: import("svelte").Component<import("mdast").ThematicBreak, {}, "">;
    yaml: import("svelte").Component<import("mdast").Yaml, {}, "">;
};
export default _default;
