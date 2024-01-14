/*─ oro/theme/main.ts ────────────────────────────────────────────────────────*
  Defines the main, original Oro Theme, as well as its italics variant.
 *────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023-2024 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import { OroColor } from "../color"
import { OroTheme } from "../theme"

/** Main theme definition. */
export function mainTheme(): OroTheme {
    return {
        name: "Oro Theme",
        filename: "mainTheme.json",

        keyword: "#E0CD78",
        operator: "#E0CD78",

        userType: "#63DBC1",
        builtinType: "#70C2E7",
        interfaceType: "#E4C693",

        function: "#DDDDDD",
        staticFunction: "#70C2E7",

        constant: "#77D4D4",
        builtinConstant: "#77D4D4",

        enumeration: "#8FDB8F",
        namespace: "#D5CCBA",
        macro: "#A0A0A0",
        variable: "#BCD3D6",
        number: "#CEC7A8",
        punctuation: "#A0A0A0",
        comment: "#787878",

        string: "#68E09E",
        escape: "#A8DBBF",

        error: "#E04444",
        warning: "#E0A243",
        link: "#4EB3E2",

        ui: {
            accent: "#70C2E7",
            border: "#2E505F",
            button: "#3A6375",
            buttonHover: "#4F88A0"
        }
    }
}

/** Definition of the italics variant of the main theme. */
export function mainThemeItalics(): OroTheme {
    const theme = mainTheme()

    theme.name = "Oro Theme (Italics)"
    theme.filename = "mainThemeItalics.json"

    theme.keyword = {
        foreground: theme.keyword as OroColor,
        italic: true
    }

    theme.builtinType = {
        foreground: theme.builtinType as OroColor,
        italic: true
    }

    theme.builtinConstant = {
        foreground: theme.builtinConstant as OroColor,
        italic: true
    }

    return theme
}
