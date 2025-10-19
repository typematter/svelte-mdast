export interface RootContext {
    getDefinition: (identifier: string) => import('mdast').Definition | undefined;
    getHeadingId: (heading: import('mdast').Heading) => string | undefined;
}
export declare const getRootContext: () => RootContext, setRootContext: (context: RootContext) => RootContext;
