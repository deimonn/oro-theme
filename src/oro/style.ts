/*─ oro/style.ts ─────────────────────────────────────────────────────────────*
  Defines the `OroStyle` object, capable of describing any style in the
  extension.
 *────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023-2024 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import { OroColor, isOroColor, buildColor } from "./color"
import {
    VSCodeSemanticTokenColor,
    VSCodeTokenColorSettings
} from "../vscode/theme"

/** Oro style. Describes how to style a token. Build with `buildStyle`. */
export type OroStyle = OroColor | {
    /** The foreground color for the token. */
    foreground: OroColor
    /** Render bold. */
    bold?: boolean
    /** Render in italics. */
    italic?: boolean
    /** Render with strikethrough. */
    strikethrough?: boolean
    /** Render with underline. */
    underline?: boolean
}

/** Built oro style. */
export type BuiltStyle = {
    semanticTokenColor: VSCodeSemanticTokenColor
    tokenColorSettings: VSCodeTokenColorSettings
}

/** Builds an Oro style. */
export function buildStyle(style: OroStyle): BuiltStyle {
    // Style is just a color.
    if (isOroColor(style)) {
        const foreground = buildColor(style)
        return {
            semanticTokenColor: foreground,
            tokenColorSettings: {
                foreground,
                fontStyle: ""
            }
        }
    }

    // Style makes use of font styles.
    const foreground = buildColor(style.foreground)
    let fontStyle: string | string[] = []

    if (style.bold) { fontStyle.push("bold") }
    if (style.italic) { fontStyle.push("italic") }
    if (style.strikethrough) { fontStyle.push("strikethrough") }
    if (style.underline) { fontStyle.push("underline") }

    fontStyle = fontStyle.join(" ")

    return {
        semanticTokenColor: { foreground, fontStyle },
        tokenColorSettings: { foreground, fontStyle }
    }
}
