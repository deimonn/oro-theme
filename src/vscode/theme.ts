/*─ vscode/theme.ts ──────────────────────────────────────────────────────────*
  Visual Studio Code theme type declarations. These allow for defining a theme
  in TypeScript in an almost completely type-safe manner.

  They were deduced by poking around in a JSON file with the
  `vscode://schemas/color-theme` schema.
 *────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2024 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

/** Style rules based on semantic highlighting. */
export type VSCodeSemanticTokenColor = string | {
    foreground?: string
    bold?: boolean
    italic?: boolean
    strikethrough?: boolean
    underline?: boolean
    fontStyle?: string
}

/** Style rules based on matched TextMate scopes. */
export type VSCodeTokenColor = string | {
    /** Optional description for the rule. */
    name?: string
    /** The scope or scopes that the rule applies to. */
    scope: string | string[]
    /** Rule style settings. */
    settings: {
        fontStyle?: string
        foreground?: string
        background?: string
    }
}

/**
 * Represents a complete Visual Studio Code theme. Writing this to a JSON file
 * should yield a fully functional theme.
 */
export type VSCodeTheme = {
    /** Whether semantic highlighting is enabled for the theme. */
    semanticHighlighting?: boolean
    /** Semantic token style rules. */
    semanticTokenColors?: {
        [key: string]: VSCodeSemanticTokenColor
    }

    /** Scope-based style rules. */
    tokenColors?: VSCodeTokenColor[]

    /**
     * General UI colors.
     *
     * These could be an object but since there's so many keys it has been left
     * as a map for now.
     */
    colors?: {
        [key: string]: string
    }
}
