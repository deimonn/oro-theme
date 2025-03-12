/*── oro/theme.ts ── Theme object used to define all variants in the extension ──*
 │
 │ Copyright (c) 2023-2025 Deimonn (a.k.a. Nahuel S. Cisterna)
 │
 │ This file is licensed under the MIT License.
 │
 │ See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for license information.
 │
 */

// SPDX-License-Identifier: MIT

import { OroColor, BuiltColor, buildColor } from "./color";
import { OroStyle, BuiltStyle, buildStyle } from "./style";

/** Oro theme definition object. */
export type OroTheme = {
    /** The name to give to the theme. */
    name: string
    /** The name to give to the theme file. */
    filename: string

    /** Style for keywords. */
    keyword: OroStyle
    /** Style for operators. */
    operator: OroStyle

    /** Style for user-defined types, such as classes. */
    userType: OroStyle
    /** Style for built-in types. */
    builtinType: OroStyle
    /** Style for interface or interface-like types. */
    interfaceType: OroStyle

    /** Style for functions. */
    function: OroStyle
    /** Style for static functions. */
    staticFunction: OroStyle

    /** Style for constants and enumeration members. */
    constant: OroStyle
    /** Style for built-in constants, such as `true`. */
    builtinConstant: OroStyle

    /** Style for enumerations. */
    enumeration: OroStyle
    /** Style for namespaces. */
    namespace: OroStyle
    /** Style for macros. */
    macro: OroStyle
    /** Style for variables. */
    variable: OroStyle
    /** Style for numbers. */
    number: OroStyle
    /** Style for punctuation. */
    punctuation: OroStyle
    /** Style for comments. */
    comment: OroStyle

    /** Style for strings. */
    string: OroStyle
    /** Style for escape sequences. */
    escape: OroStyle

    /** Color for errors and illegal code. */
    error: OroColor
    /** Color for warnings. */
    warning: OroColor
    /** Color for info. */
    info: OroColor

    /** Color for added resources. */
    added: OroColor
    /** Color for deleted resources. */
    deleted: OroColor
    /** Color for ignored resources. */
    ignored: OroColor
    /** Color for modified resources and settings. */
    modified: OroColor
    /** Color for untracked resources. */
    untracked: OroColor

    /**
     * Color for "running" items in the interface; currently just used for running processes on a
     * forwarded port.
     */
    running: OroColor

    /** Main background color; e.g. the editor's. */
    background: OroColor
    /** Secondary background color; e.g. the sidebar's. */
    backgroundSecondary: OroColor
    /** Peek background color. */
    backgroundPeek: OroColor

    /** Default foreground color. */
    foreground: OroColor
    /** Inactive foreground color. */
    foregroundInactive: OroColor

    /** Preformatted text color. */
    preformat: OroColor
    /** Color for accenting, focus and highlighting. */
    accent: OroColor

    /** Guide color; e.g. indentation, line numbers. */
    guide: OroColor
    /** Focused guide color. */
    guideFocus: OroColor

    /** Color for search matches. */
    match: OroColor
    /** Color for the border of the currently focused search match. */
    matchFocus: OroColor

    /** Link color. */
    link: OroColor
    /** Hovered link color. */
    linkHover: OroColor

    /** Button color. */
    button: OroColor
    /** Hovered button color. */
    buttonHover: OroColor

    /** Input and dropdown color. */
    input: OroColor
    /** Input border color. */
    inputBorder: OroColor

    /** Widget color; e.g. background of hover, notifications. */
    widget: OroColor
    /** Widget border color. */
    widgetBorder: OroColor

    /** Checkbox color. */
    checkbox: OroColor

    /** Scroll bar color. */
    scrollBar: OroColor
    /** Scroll bar color when clicked. */
    scrollBarActive: OroColor

    /** Status bar color. */
    statusBar: OroColor
    /** Status bar foreground color. */
    statusBarForeground: OroColor
    /** Status bar color during debugging. */
    statusBarDebugging: OroColor
    /** Status bar color when no folder is open. */
    statusBarNoFolder: OroColor

    /** Badge color. */
    badge: OroColor
    /** Badge foreground color. */
    badgeForeground: OroColor
};

/** Built theme styles and colors. */
export type BuiltTheme = {
    keyword: BuiltStyle
    operator: BuiltStyle

    userType: BuiltStyle
    builtinType: BuiltStyle
    interfaceType: BuiltStyle

    function: BuiltStyle
    staticFunction: BuiltStyle

    constant: BuiltStyle
    builtinConstant: BuiltStyle

    enumeration: BuiltStyle
    namespace: BuiltStyle
    macro: BuiltStyle
    variable: BuiltStyle
    number: BuiltStyle
    punctuation: BuiltStyle
    comment: BuiltStyle

    string: BuiltStyle
    escape: BuiltStyle

    error: BuiltColor
    warning: BuiltColor
    info: BuiltColor

    added: BuiltColor
    deleted: BuiltColor
    ignored: BuiltColor
    modified: BuiltColor
    untracked: BuiltColor

    running: BuiltColor

    background: BuiltColor
    backgroundSecondary: BuiltColor
    backgroundPeek: BuiltColor

    foreground: BuiltColor
    foregroundInactive: BuiltColor

    preformat: BuiltColor
    accent: BuiltColor

    guide: BuiltColor
    guideFocus: BuiltColor

    match: BuiltColor
    matchFocus: BuiltColor

    link: BuiltColor
    linkHover: BuiltColor

    button: BuiltColor
    buttonHover: BuiltColor

    input: BuiltColor
    inputBorder: BuiltColor

    widget: BuiltColor
    widgetBorder: BuiltColor

    checkbox: BuiltColor

    scrollBar: BuiltColor
    scrollBarActive: BuiltColor

    statusBar: BuiltColor
    statusBarForeground: BuiltColor
    statusBarDebugging: BuiltColor
    statusBarNoFolder: BuiltColor

    badge: BuiltColor
    badgeForeground: BuiltColor
};

/** Builds an Oro theme definition. */
export function buildTheme(theme: OroTheme): BuiltTheme {
    return {
        keyword: buildStyle(theme.keyword),
        operator: buildStyle(theme.operator),

        userType: buildStyle(theme.userType),
        builtinType: buildStyle(theme.builtinType),
        interfaceType: buildStyle(theme.interfaceType),

        function: buildStyle(theme.function),
        staticFunction: buildStyle(theme.staticFunction),

        constant: buildStyle(theme.constant),
        builtinConstant: buildStyle(theme.builtinConstant),

        enumeration: buildStyle(theme.enumeration),
        namespace: buildStyle(theme.namespace),
        macro: buildStyle(theme.macro),
        variable: buildStyle(theme.variable),
        number: buildStyle(theme.number),
        punctuation: buildStyle(theme.punctuation),
        comment: buildStyle(theme.comment),

        string: buildStyle(theme.string),
        escape: buildStyle(theme.escape),

        error: buildColor(theme.error),
        warning: buildColor(theme.warning),
        info: buildColor(theme.info),

        added: buildColor(theme.added),
        deleted: buildColor(theme.deleted),
        ignored: buildColor(theme.ignored),
        modified: buildColor(theme.modified),
        untracked: buildColor(theme.untracked),

        running: buildColor(theme.running),

        background: buildColor(theme.background),
        backgroundSecondary: buildColor(theme.backgroundSecondary),
        backgroundPeek: buildColor(theme.backgroundPeek),

        foreground: buildColor(theme.foreground),
        foregroundInactive: buildColor(theme.foregroundInactive),

        preformat: buildColor(theme.preformat),
        accent: buildColor(theme.accent),

        guide: buildColor(theme.guide),
        guideFocus: buildColor(theme.guideFocus),

        match: buildColor(theme.match),
        matchFocus: buildColor(theme.matchFocus),

        link: buildColor(theme.link),
        linkHover: buildColor(theme.linkHover),

        button: buildColor(theme.button),
        buttonHover: buildColor(theme.buttonHover),

        input: buildColor(theme.input),
        inputBorder: buildColor(theme.inputBorder),

        widget: buildColor(theme.widget),
        widgetBorder: buildColor(theme.widgetBorder),

        checkbox: buildColor(theme.checkbox),

        scrollBar: buildColor(theme.scrollBar),
        scrollBarActive: buildColor(theme.scrollBarActive),

        statusBar: buildColor(theme.statusBar),
        statusBarForeground: buildColor(theme.statusBarForeground),
        statusBarDebugging: buildColor(theme.statusBarDebugging),
        statusBarNoFolder: buildColor(theme.statusBarNoFolder),

        badge: buildColor(theme.badge),
        badgeForeground: buildColor(theme.badgeForeground)
    };
}
