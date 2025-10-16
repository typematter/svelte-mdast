import { describe, expect, test } from 'vitest';
import { sanitizeId } from './sanitize-id.js';

describe('sanitizeId', () => {
	test('handles simple identifiers', () => {
		expect(sanitizeId('example')).toBe('example');
		expect(sanitizeId('hello-world')).toBe('hello-world');
		expect(sanitizeId('foo_bar')).toBe('foo_bar');
	});

	test('replaces spaces with hyphens', () => {
		expect(sanitizeId('hello world')).toBe('hello-world');
		expect(sanitizeId('multiple  spaces')).toBe('multiple-spaces');
	});

	test('replaces tabs with hyphens', () => {
		expect(sanitizeId('hello\tworld')).toBe('hello-world');
	});

	test('encodes special characters', () => {
		expect(sanitizeId('foo:bar')).toBe('foo_3a_bar');
		expect(sanitizeId('foo.bar')).toBe('foo_2e_bar');
		expect(sanitizeId('foo@bar')).toBe('foo_40_bar');
	});

	test('prefixes identifiers starting with digits', () => {
		expect(sanitizeId('123')).toBe('id-123');
		expect(sanitizeId('1abc')).toBe('id-1abc');
	});

	test('does not prefix identifiers starting with letters', () => {
		expect(sanitizeId('a123')).toBe('a123');
	});

	test('handles mixed problematic characters', () => {
		expect(sanitizeId('hello world:123')).toBe('hello-world_3a_123');
	});

	test('handles empty string', () => {
		// Edge case - empty identifiers shouldn't occur in valid Mdast but test anyway
		expect(sanitizeId('')).toBe('');
	});
});
