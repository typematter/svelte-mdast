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
export declare function sanitizeId(identifier: string): string;
