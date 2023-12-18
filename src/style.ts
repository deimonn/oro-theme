/*────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

/**
 * Token style. Used for semantic tokens and for theme definition.
 *
 * Can be converted into a scope style via `scopeStyle()`.
 */
export type TokenStyle = string | {
    /** The foreground color for the token. */
    foreground: string
    /** Render bold. */
    bold?: boolean
    /** Render in italics. */
    italic?: boolean
    /** Render with strikethrough. */
    strikethrough?: boolean
    /** Render with underline. */
    underline?: boolean
}

/**
 * Scope style. Used for syntax highlighting based on TextMate scopes.
 */
export type ScopeStyle = {
    /** The foreground color for the scope. */
    foreground: string
    /** The font styles string for the scope. */
    fontStyle: string
}

/** Converts a token style into a scope style.  */
export function scopeStyle(token: TokenStyle): ScopeStyle {
    if (typeof token === 'string') {
        return {
            foreground: token,
            fontStyle: ''
        }
    } else {
        let fontStyles: string[] = []

        if (token.bold) { fontStyles.push('bold') }
        if (token.italic) { fontStyles.push('italic') }
        if (token.strikethrough) { fontStyles.push('strikethrough') }
        if (token.underline) { fontStyles.push('underline') }

        return {
            foreground: token.foreground,
            fontStyle: fontStyles.join(' ')
        }
    }
}
