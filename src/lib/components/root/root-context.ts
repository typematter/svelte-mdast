import { createContext } from 'svelte';

export interface RootContext {
	getDefinition: (identifier: string) => import('mdast').Definition | undefined;
	getHeadingId: (heading: import('mdast').Heading) => string | undefined;
}

export const [getRootContext, setRootContext] = createContext<RootContext>();
