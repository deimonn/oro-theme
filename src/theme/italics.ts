/*────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://github.com/deimonn/oro-theme/blob/master/LICENSE for license
  information.
 *────────────────────────────────────────────────────────────────────────────*/

import { Theme } from '../theme'

/** Italics theme definition. */
export let italicsTheme: Theme = {
    name: "Oro Theme (Italics)",
    filename: "italicsTheme.json",

    keyword: { foreground: "#e0cd78", italic: true },
    operator: "#e0cd78",

    userType: "#63dbc1",
    builtinType: { foreground: "#70c2e7", italic: true },
    interfaceType: "#e4c693",

    function: "#dddddd",
    staticFunction: "#70c2e7",

    constant: "#77d4d4",
    builtinConstant: { foreground: "#77d4d4", italic: true },

    enumeration: "#8FDB8F",
    namespace: "#d5ccba",
    macro: "#a0a0a0",
    variable: "#bcd3d6",
    number: "#cec7a8",
    punctuation: "#a0a0a0",
    comment: "#787878",

    string: "#68e09e",
    escape: "#a8dbbf",

    error: "#e04444",
    warning: "#e0a243",
    link: "#4eb3e2",

    ui: {
        accent: "#70c2e7",
        border: "#2e505f",
        button: "#3a6375",
        buttonHover: "#4f88a0"
    }
}
