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
}
export declare const defaultComponents: {
    blockquote: import("svelte").Component<{
        node: import("mdast").Blockquote;
    }, {}, "">;
    break: import("svelte").Component<{
        node: import("mdast").Break;
    }, {}, "">;
    code: import("svelte").Component<{
        node: import("mdast").Code;
    }, {}, "">;
    definition: import("svelte").Component<{
        node: import("mdast").Definition;
    }, {}, "">;
    delete: import("svelte").Component<{
        node: import("mdast").Delete;
    }, {}, "">;
    emphasis: import("svelte").Component<{
        node: import("mdast").Emphasis;
    }, {}, "">;
    footnoteDefinition: import("svelte").Component<{
        node: import("mdast").FootnoteDefinition;
    }, {}, "">;
    footnoteReference: import("svelte").Component<{
        node: import("mdast").FootnoteReference;
    }, {}, "">;
    heading: import("svelte").Component<{
        node: import("mdast").Heading;
    }, {}, "">;
    html: import("svelte").Component<{
        node: import("mdast").Html;
    }, {}, "">;
    image: import("svelte").Component<{
        node: import("mdast").Image;
    }, {}, "">;
    imageReference: import("svelte").Component<{
        node: import("mdast").ImageReference;
    }, {}, "">;
    inlineCode: import("svelte").Component<{
        node: import("mdast").InlineCode;
    }, {}, "">;
    link: import("svelte").Component<{
        node: import("mdast").Link;
    }, {}, "">;
    linkReference: import("svelte").Component<{
        node: import("mdast").LinkReference;
    }, {}, "">;
    list: import("svelte").Component<{
        node: import("mdast").List;
    }, {}, "">;
    listItem: import("svelte").Component<{
        node: import("mdast").ListItem;
    }, {}, "">;
    paragraph: import("svelte").Component<{
        node: import("mdast").Paragraph;
    }, {}, "">;
    root: import("svelte").Component<{
        node: import("mdast").Root;
    }, {}, "">;
    strong: import("svelte").Component<{
        node: import("mdast").Strong;
    }, {}, "">;
    table: import("svelte").Component<{
        node: import("mdast").Table;
    }, {}, "">;
    tableCell: import("svelte").Component<{
        node: import("mdast").TableCell;
    }, {}, "">;
    tableRow: import("svelte").Component<{
        node: import("mdast").TableRow;
    }, {}, "">;
    text: import("svelte").Component<{
        node: import("mdast").Text;
    }, {}, "">;
    thematicBreak: import("svelte").Component<{
        node: import("mdast").ThematicBreak;
    }, {}, "">;
    yaml: import("svelte").Component<{
        node: import("mdast").Yaml;
    }, {}, "">;
};
