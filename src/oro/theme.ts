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
    /** Style for keywords. */
    keyword: BuiltStyle
    /** Style for operators. */
    operator: BuiltStyle

    /** Style for user-defined types, such as classes. */
    userType: BuiltStyle
    /** Style for built-in types. */
    builtinType: BuiltStyle
    /** Style for interface or interface-like types. */
    interfaceType: BuiltStyle

    /** Style for functions. */
    function: BuiltStyle
    /** Style for static functions. */
    staticFunction: BuiltStyle

    /** Style for constants and enumeration members. */
    constant: BuiltStyle
    /** Style for built-in constants, such as `true`. */
    builtinConstant: BuiltStyle

    /** Style for enumerations. */
    enumeration: BuiltStyle
    /** Style for namespaces. */
    namespace: BuiltStyle
    /** Style for macros. */
    macro: BuiltStyle
    /** Style for variables. */
    variable: BuiltStyle
    /** Style for numbers. */
    number: BuiltStyle
    /** Style for punctuation. */
    punctuation: BuiltStyle
    /** Style for comments. */
    comment: BuiltStyle

    /** Style for strings. */
    string: BuiltStyle
    /** Style for escape sequences. */
    escape: BuiltStyle

    /** Color for errors and illegal code. */
    error: BuiltColor
    /** Color for warnings. */
    warning: BuiltColor
    /** Link color. */
    link: BuiltColor

    /** UI dark accent color. */
    ui: {
        /** Accenting color. */
        accent: BuiltColor
        /** Dark color currently only used for input borders. */
        border: BuiltColor
        /** Button and status bar color. */
        button: BuiltColor
        /** Button color on hover. */
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
