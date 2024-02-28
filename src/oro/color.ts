/*─ oro/color.ts ─────────────────────────────────────────────────────────────*
  Defines the `OroColor` object, used to represent, manipulate and build colors
  in the extension.
 *────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2024 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import Color = require("color")

import { OroStyle } from "./style"

/** Oro color. Either a hex color code string or a `Color` instance. */
export type OroColor = string | Color
/** Built color; always a `Color` instance. */
export type BuiltColor = Color

/** Returns true if the style is an `OroColor` "instance". */
export function isOroColor(style: OroStyle): style is OroColor {
    return typeof style === "string" || style instanceof Color
}

/**
 * Builds a color. If its a hex color code string, converts it into a `Color`
 * instance.
 */
export function buildColor(color: OroColor): BuiltColor {
    if (typeof color === "string") {
        return new Color(color)
    } else {
        return color
    }
}
