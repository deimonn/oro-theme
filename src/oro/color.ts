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
/** Built color; essentially a hex color code string. */
export type BuiltColor = string

/** Returns true if the style is an `OroColor` "instance". */
export function isOroColor(style: OroStyle): style is OroColor {
    return typeof style == "string" || style instanceof Color
}

/**
 * Builds a color. If its a `Color` instance, converts it into a hex color code
 * string.
 */
export function buildColor(color: OroColor): BuiltColor {
    if (typeof color == "string") {
        return color
    } else {
        return color.hexa()
    }
}
