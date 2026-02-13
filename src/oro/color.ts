/*── oro/color.ts ── Token color utilities ──*
 │
 │ Copyright (c) 2024-2026 Deimonn
 │
 │ This file is licensed under the MIT License.
 │
 │ See https://deimonn.dev/oro-theme/license.txt for license information.
 │
 */

// SPDX-License-Identifier: MIT

import Color = require("color")

import { OroStyle } from "./style";

/** Oro color. Either a hex color code string or a `Color` instance. */
export type OroColor = string | Color;
/** Built color; always a `Color` instance. */
export type BuiltColor = Color;

/** Returns true if the style is an `OroColor` "instance". */
export function isOroColor(style: OroStyle): style is OroColor {
    return typeof style === "string" || style instanceof Color;
}

/** Builds a color. If its a hex color code string, converts it into a `Color` instance. */
export function buildColor(color: OroColor): BuiltColor {
    if (typeof color === "string") {
        return new Color(color);
    } else {
        return color;
    }
}
