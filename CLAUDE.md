# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit library package (`@typematter/svelte-mdast`) that transforms [Mdast](https://github.com/syntax-tree/mdast) (Markdown Abstract Syntax Tree) into Svelte components. It provides Mdast-specific component implementations that work with `@typematter/svelte-unist` (https://github.com/typematter/svelte-unist), which is the parent library that provides generic AST rendering capabilities.

## Core Architecture

The library exports both individual components and a convenience `components` object that maps all Mdast node types to their corresponding Svelte components. These components cover the full Markdown syntax:

- **Block elements**: `root`, `paragraph`, `heading`, `blockquote`, `list`, `listItem`, `code`, `thematicBreak`, `html`, `table`, `tableRow`, `tableCell`
- **Inline elements**: `text`, `emphasis`, `strong`, `delete`, `link`, `image`, `inlineCode`, `break`
- **Reference elements**: `linkReference`, `imageReference`, `definition`
- **GFM/Extended**: `footnoteDefinition`, `footnoteReference`, `yaml`

The `components` object provides an easy way to include all Mdast components at once when using the library. Developers can import the complete map (`import { components } from '@typematter/svelte-mdast'`) or import individual components for more granular control.

These components are designed to work with the `<Unist>` component from `@typematter/svelte-unist`, which provides the generic AST rendering engine. The rendering flow is:

1. User passes a Mdast AST and this library's `components` object to `<Unist>` from `@typematter/svelte-unist`
2. `<Unist>` traverses the AST and delegates rendering to the appropriate component based on node type
3. Each Mdast component uses `<Node>` (also from `@typematter/svelte-unist`) to recursively render child nodes

This architecture separates AST traversal logic (in `svelte-unist`) from Mdast-specific rendering (in this library).

## Development Commands

### Install dependencies

```bash
pnpm install
```

### Development server

```bash
pnpm dev
```

### Build the library

```bash
pnpm build           # Runs both vite build and package
pnpm package         # Builds distributable package only
```

### Testing

```bash
pnpm test            # Run tests with Vitest
```

Tests use:

- Vitest with jsdom environment
- @testing-library/jest-dom matchers (configured in vitest-setup.js)
- Test files located alongside components: `*.test.ts`
- 27 test files with 95 tests total

### Run a single test file

```bash
pnpm vitest src/lib/components/heading/heading.test.ts
```

### Type checking

```bash
pnpm check           # One-time type check
pnpm check:watch     # Watch mode for type checking
```

### Linting and formatting

```bash
pnpm lint            # Check formatting (Prettier) and run ESLint
pnpm format          # Auto-format with Prettier
```

## Key Implementation Details

### Component Pattern

All components follow a consistent pattern using Svelte 5 runes:

```svelte
<script lang="ts">
	import { Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').NodeType } = $props();
	let { children, ...otherProps } = $derived(node);
</script>

{#each children as child (child)}<Node node={child} />{/each}
```

Key aspects:

- Each node type has its own directory under `src/lib/components/` with three files: `[component].svelte`, `index.ts`, and `[component].test.ts`
- `$props()` for component props with TypeScript typing
- `$derived()` for reactive derivations from node properties
- `<Node>` component from `@typematter/svelte-unist` for recursive rendering

### Heading Component

The Heading component ([src/lib/components/heading/heading.svelte](src/lib/components/heading/heading.svelte)) demonstrates dynamic element rendering:

- Uses `<svelte:element>` to dynamically render `<h1>` through `<h6>` based on `depth` property
- Derives the tag name: `let tag = $derived(\`h${depth}\`)`
- Minimal reactivity approach for performance

### ListItem Component - GFM Task Lists

The ListItem component ([src/lib/components/list-item/list-item.svelte](src/lib/components/list-item/list-item.svelte)) supports GFM task list items:

```svelte
let {(checked, children, spread)} = $derived(node);
```

**Task list support (`checked` property)**:

- When `checked` is `true` or `false`, renders a disabled checkbox input
- The checkbox reflects the task completion state
- When `checked` is `null` or `undefined`, no checkbox is rendered (regular list item)

**Spread property**:

- Applies a `.spread` class when `spread` is `true`
- Allows styling list items that have blank lines between them
- Users can define `.spread` CSS to customize spacing

### Definition Builder System

The definition builder ([src/lib/definition-builder/](src/lib/definition-builder/)) provides context-based resolution for Markdown reference-style links and images:

**How it works:**

1. `definitions-from.ts` uses `@accuser/mdast-util-type-guards` and `@typematter/svelte-unist` utilities to extract all Definition nodes from the AST
2. `definition-builder.ts` creates a cached lookup function that maps identifiers to Definition nodes
3. The context is provided via `UnistContext` (augmented through module declaration in `index.ts`)
4. Reference components (`link-reference.svelte`, `image-reference.svelte`) use `getUnistContext()` to access `getDefinition` and resolve URLs/titles

**Example usage in components:**

```svelte
<script lang="ts">
	import { getUnistContext, Node } from '@typematter/svelte-unist';

	let { node }: { node: import('mdast').LinkReference } = $props();
	let { children, identifier } = $derived(node);

	const { getDefinition } = getUnistContext();
	let { url, title } = $derived(getDefinition?.(identifier) ?? { url: '#', title: undefined });
</script>

<a href={url} {title}>
	{#each children as child (child)}<Node node={child} />{/each}
</a>
```

This system enables proper rendering of reference-style Markdown links without needing to pass definition data through component props.

### Identifier Sanitization for HTML IDs

Footnote components use the `sanitizeId` utility ([src/lib/utils/sanitize-id.ts](src/lib/utils/sanitize-id.ts)) to ensure identifiers are safe for use as HTML ID attributes:

```typescript
import { sanitizeId } from '../../utils/sanitize-id.js';

let { identifier } = $derived(node);
let safeId = $derived(sanitizeId(identifier));
```

While Mdast identifiers are normalized according to the Mdast spec (whitespace collapsed, trimmed, case-folded), they may still contain characters problematic for HTML IDs (spaces, colons, special characters). The `sanitizeId` function:

- Replaces whitespace with hyphens
- Encodes special characters as hex codes (e.g., `:` becomes `_3a_`)
- Prefixes identifiers starting with digits with `id-`

This ensures footnote references and definitions generate valid, matching HTML IDs.

### Navigation Warnings

Link and link-reference components include ESLint directive to suppress navigation warnings:

```svelte
<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a href={url} {title}>...</a>
```

This is necessary because URLs come from Markdown content and shouldn't use SvelteKit's navigation system.

### HTML Security

The HTML component uses `{@html value}` to render raw HTML from Markdown:

```svelte
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html value}
```

This is acceptable for a Markdown rendering library, as Markdown parsers (like `remark-parse`) typically handle sanitization. Users should ensure their Markdown source is trusted or sanitized before parsing if rendering untrusted content.

### Usage Example

The demo page ([src/routes/+page.svelte](src/routes/+page.svelte) and [src/routes/+page.server.ts](src/routes/+page.server.ts)) demonstrates typical usage:

```svelte
<script lang="ts">
	import { components } from '$lib/components/index.js';
	import { Unist } from '@typematter/svelte-unist';

	let { data } = $props();
	let { ast } = $derived(data);
</script>

<Unist {ast} {components} />
```

The AST is typically built using `unist-builder` or parsed from Markdown using a parser like `remark-parse`.

### Svelte 5 Runes

The codebase uses Svelte 5's new runes syntax throughout:

- `$props()` for component props
- `$derived()` for reactive computations
- `<svelte:element>` for dynamic element rendering
- Minimal reactivity for better performance

### Package Configuration

- This is a **library package**, not an application
- Built with `@sveltejs/package` (outputs to `dist/`)
- Entry point: `src/lib/index.ts`
- Package exports both types (`dist/index.d.ts`) and Svelte components (`dist/index.js`)
- Peer dependency on Svelte 5.39.11+
- Test files are excluded from published package

### Linting

- Uses ESLint 9 with flat config (`eslint.config.js`)
- TypeScript support via `typescript-eslint`
- Svelte-specific rules via `eslint-plugin-svelte`
- Prettier integration for code formatting
- Note: `no-undef` is disabled as recommended by typescript-eslint for TypeScript projects
- Navigation warnings suppressed for link components (URLs come from Markdown content)
