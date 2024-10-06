export interface ExtensionMap {
}
export type AllExtensions = ExtensionMap[keyof ExtensionMap];
export type Extensions<T extends import('micromark-util-types').Extension = AllExtensions> = {
    [key: string]: T;
};
export interface MdastExtensionMap {
}
export type AllMdastExtensions = MdastExtensionMap[keyof MdastExtensionMap];
export type MdastExtensions<T extends (import('mdast-util-from-markdown').Extension | import('mdast-util-from-markdown').Extension[])[] = AllMdastExtensions> = {
    [key: string]: T;
};
declare module '@accuser/svelte-unist' {
    interface Context {
        extensions: Extensions;
        mdastExtensions: MdastExtensions;
    }
    interface Props {
        extensions?: Partial<Extensions>;
        mdastExtensions?: Partial<MdastExtensions>;
    }
}
