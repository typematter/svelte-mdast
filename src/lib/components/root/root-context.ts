import { createContext } from 'svelte';

export interface RootContext {
	getDefinition: (identifier?: string | null) => import('mdast').Definition | undefined;
}

export const [getRootContext, setRootContext] = createContext<RootContext>();
