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

/** Generic theme type. */
type BaseTheme<S, C> = {
    /** Style for keywords. */
    keyword: S
    /** Style for operators. */
    operator: S

    /** Style for user-defined types, such as classes. */
    userType: S
    /** Style for built-in types. */
    builtinType: S
    /** Style for interface or interface-like types. */
    interfaceType: S

    /** Style for functions. */
    function: S
    /** Style for static functions. */
    staticFunction: S

    /** Style for constants and enumeration members. */
    constant: S
    /** Style for built-in constants, such as `true`. */
    builtinConstant: S

    /** Style for enumerations. */
    enumeration: S
    /** Style for namespaces. */
    namespace: S
    /** Style for macros. */
    macro: S
    /** Style for variables. */
    variable: S
    /** Style for numbers. */
    number: S
    /** Style for punctuation. */
    punctuation: S
    /** Style for comments. */
    comment: S

    /** Style for strings. */
    string: S
    /** Style for escape sequences. */
    escape: S

    /** Color for errors and illegal code. */
    error: C
    /** Color for warnings. */
    warning: C
    /** Color for info. */
    info: C

    /** Color for added resources. */
    added: C
    /** Color for deleted resources. */
    deleted: C
    /** Color for ignored resources. */
    ignored: C
    /** Color for modified resources and settings. */
    modified: C
    /** Color for untracked resources. */
    untracked: C

    /**
     * Color for "running" items in the interface; currently just used for running processes on a
     * forwarded port.
     */
    running: C

    /** Main background color; e.g. the editor's. */
    background: C
    /** Secondary background color; e.g. the sidebar's. */
    backgroundSecondary: C
    /** Peek background color. */
    backgroundPeek: C

    /** Default foreground color. */
    foreground: C
    /** Inactive foreground color. */
    foregroundInactive: C

    /** Preformatted text color. */
    preformat: C
    /** Color for accenting, focus and highlighting. */
    accent: C

    /** Guide color; e.g. indentation, line numbers. */
    guide: C
    /** Focused guide color. */
    guideFocus: C

    /** Color for search matches. */
    match: C
    /** Color for the border of the currently focused search match. */
    matchFocus: C

    /** Link color. */
    link: C
    /** Hovered link color. */
    linkHover: C

    /** Button color. */
    button: C
    /** Hovered button color. */
    buttonHover: C

    /** Input and dropdown color. */
    input: C
    /** Input border color. */
    inputBorder: C

    /** Widget color; e.g. background of hover, notifications. */
    widget: C
    /** Widget border color. */
    widgetBorder: C

    /** Checkbox color. */
    checkbox: C

    /** Scroll bar color. */
    scrollBar: C
    /** Scroll bar color when clicked. */
    scrollBarActive: C

    /** Status bar color. */
    statusBar: C
    /** Status bar foreground color. */
    statusBarForeground: C
    /** Status bar color during debugging. */
    statusBarDebugging: C
    /** Status bar color when no folder is open. */
    statusBarNoFolder: C

    /** Badge color. */
    badge: C
    /** Badge foreground color. */
    badgeForeground: C
};

/** Oro theme definition object. */
export type OroTheme = {
    /** The name to give to the theme. */
    name: string
    /** The name to give to the theme file. */
    filename: string
} & BaseTheme<OroStyle, OroColor>;

/** Built theme styles and colors. */
export type BuiltTheme = BaseTheme<BuiltStyle, BuiltColor>;

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
