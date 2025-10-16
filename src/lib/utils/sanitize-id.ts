/**
 * Sanitizes a string for use as an HTML ID attribute.
 *
 * Mdast identifiers are normalized according to the Mdast spec, but may still
 * contain characters that are problematic for HTML IDs (e.g., spaces, colons).
 *
 * This function:
 * - Replaces spaces and tabs with hyphens
 * - Removes or encodes other problematic characters
 * - Ensures the result is a valid HTML ID
 *
 * @param identifier - A normalized Mdast identifier
 * @returns A safe HTML ID value
 */
export function sanitizeId(identifier: string): string {
	return (
		identifier
			// Replace whitespace with hyphens
			.replace(/[\s\t]+/g, '-')
			// Encode other characters that might be problematic
			.replace(/[^\w-]/g, (char) => `_${char.charCodeAt(0).toString(16)}_`)
			// Ensure it doesn't start with a digit (prefix with 'id-' if needed)
			.replace(/^(\d)/, 'id-$1')
	);
}
