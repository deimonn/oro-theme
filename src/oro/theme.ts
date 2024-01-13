/*─ oro/theme.ts ─────────────────────────────────────────────────────────────*
  Defines the `OroTheme` object, which is used to define all variants in the
  extension.
 *────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023-2024 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import { OroColor, BuiltColor, buildColor } from "./color"
import { OroStyle, BuiltStyle, buildStyle } from "./style"

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
    /** Link color. */
    link: OroColor

    /** UI dark accent color. */
    ui: {
        /** Accenting color. */
        accent: OroColor
        /** Dark color currently only used for input borders. */
        border: OroColor
        /** Button and status bar color. */
        button: OroColor
        /** Button color on hover. */
        buttonHover: OroColor
    }
}

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
    link: BuiltColor

    ui: {
        accent: BuiltColor
        border: BuiltColor
        button: BuiltColor
        buttonHover: BuiltColor
    }
}

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
        link: buildColor(theme.link),

        ui: {
            accent: buildColor(theme.ui.accent),
            border: buildColor(theme.ui.border),
            button: buildColor(theme.ui.button),
            buttonHover: buildColor(theme.ui.buttonHover)
        }
    }
}
