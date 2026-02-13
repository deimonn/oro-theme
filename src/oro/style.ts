/*── oro/style.ts ── Token style utilities ──*
 │
 │ Copyright (c) 2023-2026 Deimonn
 │
 │ This file is licensed under the MIT License.
 │
 │ See https://deimonn.dev/oro-theme/license.txt for license information.
 │
 */

// SPDX-License-Identifier: MIT

import { OroColor, BuiltColor, isOroColor, buildColor } from "./color";
import {
    VSCodeSemanticTokenColor,
    VSCodeTokenColorSettings
} from "../vscode/theme";

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
};

/** Built oro style. */
export type BuiltStyle = {
    semanticTokenColor: VSCodeSemanticTokenColor
    tokenColorSettings: VSCodeTokenColorSettings
    color: BuiltColor
};

/** Builds an Oro style. */
export function buildStyle(style: OroStyle): BuiltStyle {
    // Style is just a color.
    if (isOroColor(style)) {
        const color = buildColor(style);
        return {
            semanticTokenColor: color.hexa(),
            tokenColorSettings: {
                foreground: color.hexa(),
                fontStyle: ""
            },
            color
        };
    }

    // Style makes use of font styles.
    const color = buildColor(style.foreground);
    let fontStyle: string | string[] = [];

    if (style.bold) { fontStyle.push("bold"); }
    if (style.italic) { fontStyle.push("italic"); }
    if (style.strikethrough) { fontStyle.push("strikethrough"); }
    if (style.underline) { fontStyle.push("underline"); }

    fontStyle = fontStyle.join(" ");

    return {
        semanticTokenColor: { foreground: color.hexa(), fontStyle },
        tokenColorSettings: { foreground: color.hexa(), fontStyle },
        color
    };
}
