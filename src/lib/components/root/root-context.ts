import { createContext } from 'svelte';
import type { YamlValue } from './yaml-value.js';

export interface RootContext {
	getDefinition: (identifier: string) => import('mdast').Definition | undefined;
	getFrontmatter: () => YamlValue | undefined;
	getHeadingId: (heading: import('mdast').Heading) => string | undefined;
}

export const [getRootContext, setRootContext] = createContext<RootContext>();
