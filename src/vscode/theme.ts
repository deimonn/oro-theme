/*── vscode/theme.ts ── Visual Studio Code theme type declarations ──*
 │
 │ Copyright (c) 2024-2025 Deimonn (a.k.a. Nahuel S. Cisterna)
 │
 │ This file is licensed under the MIT License.
 │
 │ See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for license information.
 │
 */

// SPDX-License-Identifier: MIT

/** Style rules based on semantic highlighting. */
export type VSCodeSemanticTokenColor = string | {
    foreground?: string
    bold?: boolean
    italic?: boolean
    strikethrough?: boolean
    underline?: boolean
    fontStyle?: string
};

/** Style rules based on matched TextMate scopes. */
export type VSCodeTokenColor = string | {
    /** Optional description for the rule. */
    name?: string
    /** The scope or scopes that the rule applies to. */
    scope: string | string[]
    /** Rule style settings. */
    settings: VSCodeTokenColorSettings
};

/** Style settings for token color. */
export type VSCodeTokenColorSettings = {
    fontStyle?: string
    foreground?: string
    background?: string
};

/**
 * Represents a complete Visual Studio Code theme. Writing this to a JSON file
 * should yield a fully functional theme.
 */
export type VSCodeTheme = {
    /** Whether semantic highlighting is enabled for the theme. */
    semanticHighlighting?: boolean
    /** Semantic token style rules. */
    semanticTokenColors?: Record<string, VSCodeSemanticTokenColor>

    /** Scope-based style rules. */
    tokenColors?: VSCodeTokenColor[]

    /**
     * General UI colors.
     *
     * These could be an object but since there's so many keys it has been left
     * as a record for now.
     */
    colors?: Record<string, string>
};
