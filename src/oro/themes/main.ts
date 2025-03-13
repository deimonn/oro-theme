/*── oro/theme/main.ts ── Main, original Oro Theme and its italics variant ──*
 │
 │ Copyright (c) 2023-2025 Deimonn (a.k.a. Nahuel S. Cisterna)
 │
 │ This file is licensed under the MIT License.
 │
 │ See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for license information.
 │
 */

// SPDX-License-Identifier: MIT

import { OroColor } from "../color";
import { OroTheme } from "../theme";

/** Main theme definition. */
export function mainTheme(): OroTheme {
    return {
        name: "Oro Theme",
        filename: "mainTheme.json",

        keyword: "#E0CD78",
        operator: "#E0CD78",

        userType: "#63DBC1",
        standardType: "#70DBE5",
        builtinType: "#70C2E7",
        interfaceType: "#E4C693",

        function: "#DDDDDD",
        staticFunction: "#DDDDDD",

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
        info: "#77D4D4",

        added: "#63DBC1",
        deleted: "#E04444",
        ignored: "#787878",
        modified: "#E0CD78",
        untracked: "#63DBC1",

        running: "#68E09E",

        background: "#161616",
        backgroundSecondary: "#1C1C1C",
        backgroundPeek: "#202020",

        foreground: "#DDDDDD",
        foregroundInactive: "#B9B9B9",

        preformat: "#FFFFFF",
        accent: "#70C2E7",

        guide: "#5F5F5F",
        guideFocus: "#B9B9B9",

        match: "#4482FF",
        matchFocus: "#4482FF",

        link: "#70C2E7",
        linkHover: "#4EB3E2",

        button: "#3A6375",
        buttonHover: "#4F88A0",

        input: "#202020",
        inputBorder: "#2E505F",

        widget: "#202020",
        widgetBorder: "#404040",

        checkbox: "#303030",

        scrollBar: "#5F5F5F60",
        scrollBarActive: "#B9B9B960",

        statusBar: "#3A6375",
        statusBarForeground: "#FFFFFF",
        statusBarDebugging: "#812D2A",
        statusBarNoFolder: "#98753C",

        badge: "#3A6375",
        badgeForeground: "#FFFFFF"
    };
}

/** Definition of the italics variant of the main theme. */
export function mainThemeItalics(): OroTheme {
    const theme = mainTheme();

    theme.name = "Oro Theme (Italics)";
    theme.filename = "mainThemeItalics.json";

    theme.keyword = {
        foreground: theme.keyword as OroColor,
        italic: true
    };

    theme.standardType = {
        foreground: theme.standardType as OroColor,
        italic: true
    };

    theme.builtinType = {
        foreground: theme.builtinType as OroColor,
        italic: true
    };

    theme.builtinConstant = {
        foreground: theme.builtinConstant as OroColor,
        italic: true
    };

    return theme;
}
