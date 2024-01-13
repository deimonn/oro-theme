/*─ oro/theme.ts ─────────────────────────────────────────────────────────────*
  Defines the `OroTheme` object and the `generateVSCodeTheme` function, which
  converts it into the format which VSCode expects for themes.
 *────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023-2024 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import { VSCodeTheme } from "../vscode/theme"

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

/** Build theme styles and colors. */
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

/** Generate a VSCode theme from an Oro theme definition object. */
export function generateVSCodeTheme(theme: OroTheme): VSCodeTheme {
    const built = buildTheme(theme)

    return {
        semanticHighlighting: true,
        semanticTokenColors: {
            /*─ Types ───────────────────────────────────────────*/

            // User-defined types.
            class: built.userType.semanticTokenColor,
            struct: built.userType.semanticTokenColor,
            type: built.userType.semanticTokenColor,

            // Interface-like types.
            typeParameter: built.interfaceType.semanticTokenColor,
            interface: built.interfaceType.semanticTokenColor,

            // Enumeration types.
            enum: built.enumeration.semanticTokenColor,
            enumMember: built.constant.semanticTokenColor,

            // Built-in types in rust-analyzer.
            builtinType: built.builtinType.semanticTokenColor,
            // Derives in rust-analyzer.
            derive: built.interfaceType.semanticTokenColor,

            /*─ Keywords ─────────────────────────────────────────────────────*/

            // Keywords, modifiers and operations.
            keyword: built.keyword.semanticTokenColor,
            operator: built.operator.semanticTokenColor,

            // Keywords in Pylance.
            selfParameter: built.keyword.semanticTokenColor,
            clsParameter: built.keyword.semanticTokenColor,

            // Lifetimes in rust-analyzer.
            lifetime: built.keyword.semanticTokenColor,

            /*─ Function-like ────────────────────────────────────────────────*/

            // Function-like.
            function: built.function.semanticTokenColor,
            method: built.function.semanticTokenColor,
            label: built.function.semanticTokenColor,
            decorator: built.function.semanticTokenColor,

            // Static function-like.
            "function.static": built.staticFunction.semanticTokenColor,
            "method.static": built.staticFunction.semanticTokenColor,

            // Macros.
            macro: built.macro.semanticTokenColor,

            /*─ Variables & constants ────────────────────────────────────────*/

            // Variable-like.
            parameter: built.variable.semanticTokenColor,
            property: built.variable.semanticTokenColor,
            variable: built.variable.semanticTokenColor,
            event: built.variable.semanticTokenColor,

            // String-like.
            string: built.string.semanticTokenColor,
            regexp: built.string.semanticTokenColor,

            // Numbers.
            number: built.number.semanticTokenColor,

            // Escape sequences in rust-analyzer.
            escapeSequence: built.escape.semanticTokenColor,
            // Built-in constants in rust-analyzer.
            boolean: built.builtinConstant.semanticTokenColor,

            // Built-in constants in Pylance.
            builtinConstant: built.builtinConstant.semanticTokenColor,

            /*─ Miscellaneous ────────────────────────────────────────────────*/

            // Namespaces.
            namespace: built.namespace.semanticTokenColor,

            // Comments.
            comment: built.comment.semanticTokenColor,

            // Punctuation in rust-analyzer.
            punctuation: built.punctuation.semanticTokenColor,
            formatSpecifier: built.punctuation.semanticTokenColor,

            /*─ Modifiers ────────────────────────────────────────────────────*/

            // Semantic modifiers.
            "*.deprecated":   { fontStyle: "strikethrough" },
            "*.modification": { fontStyle: "underline" },

            // Modifiers in rust-analyzer.
            "*.mutable":      { fontStyle: "underline" },
            "*.consuming":    { fontStyle: "bold" },

            // Modifiers in clangd.
            "*.usedAsMutableReference": { fontStyle: "underline" },
            "*.usedAsMutablePointer":   { fontStyle: "underline" }
        },
        tokenColors: [
            // Invalid.
            {
                scope: "invalid.illegal",
                settings: {
                    foreground: built.error
                }
            },
            // User type.
            {
                scope: [
                    "entity.name.type",
                    "entity.name.type.class",
                    "entity.name.type.struct"
                ],
                settings: built.userType.tokenColorSettings
            },
            // Built-in type.
            {
                scope: [
                    "storage.type.builtin",
                    "storage.type.built-in",
                    "storage.type.primitive",
                    "support.type.builtin",
                    "support.type.built-in",
                    "support.type.primitive",
                    "keyword.type"
                ],
                settings: built.builtinType.tokenColorSettings
            },
            // Interface-like type.
            {
                scope: [
                    "entity.name.type.interface",
                    "entity.name.type.parameter"
                ],
                settings: built.interfaceType.tokenColorSettings
            },
            // Enumeration.
            {
                scope: "entity.name.type.enum",
                settings: built.enumeration.tokenColorSettings
            },
            {
                scope: "variable.other.enummember",
                settings: built.constant.tokenColorSettings
            },
            // Namespace.
            {
                scope: "entity.name.type.namespace",
                settings: built.namespace.tokenColorSettings
            },
            // Keywords, modifiers and operators.
            {
                scope: ["keyword", "storage", "variable.language"],
                settings: built.keyword.tokenColorSettings
            },
            {
                scope: "keyword.operator",
                settings: built.operator.tokenColorSettings
            },
            // Macro-like.
            {
                scope: "entity.name.function.preprocessor",
                settings: built.macro.tokenColorSettings
            },
            // Function-like.
            {
                scope: "entity.name.function",
                settings: built.function.tokenColorSettings
            },
            // Variable-like.
            {
                scope: [
                    "variable",
                    "entity.name.variable",
                    "entity.name.type.module"
                ],
                settings: built.variable.tokenColorSettings
            },
            // Constant.
            {
                scope: "constant",
                settings: built.constant.tokenColorSettings
            },
            {
                scope: "constant.language",
                settings: built.builtinConstant.tokenColorSettings
            },
            // Comment.
            {
                scope: ["comment", "punctuation.definition.comment"],
                settings: built.comment.tokenColorSettings
            },
            // String-like.
            {
                scope: "string",
                settings: built.string.tokenColorSettings
            },
            {
                scope: "constant.character.escape",
                settings: built.escape.tokenColorSettings
            },
            // Number.
            {
                scope: "constant.numeric",
                settings: built.number.tokenColorSettings
            },
            // Punctuation.
            {
                scope: "punctuation",
                settings: built.punctuation.tokenColorSettings
            },
            // Misc.
            {
                scope: "entity.name.tag",
                settings: built.constant.tokenColorSettings
            },
            {
                scope: "support.type.property-name",
                settings: built.function.tokenColorSettings
            },
            // Markup header.
            {
                scope: ["markup.heading", "entity.name.section"],
                settings: built.keyword.tokenColorSettings
            },
            // Markup bold.
            {
                scope: "markup.bold",
                settings: {
                    fontStyle: "bold"
                }
            },
            // Markup italic.
            {
                scope: "markup.italic",
                settings: {
                    fontStyle: "italic"
                }
            },
            // Markup underline.
            {
                scope: "markup.underline",
                settings: {
                    fontStyle: "underline"
                }
            },
            // Markup strikethrough.
            {
                scope: "markup.strikethrough",
                settings: {
                    fontStyle: "strikethrough"
                }
            },
            // Markup raw.
            {
                scope: [
                    "markup.raw",
                    "markup.inline.raw",
                    "fenced_code.block.language"
                ],
                settings: built.punctuation.tokenColorSettings
            },
            // Markup quote.
            {
                scope: "markup.quote",
                settings: built.punctuation.tokenColorSettings
            },
            // Markup list bullet.
            {
                scope: "markup.list.bullet",
                settings: built.punctuation.tokenColorSettings
            }
        ],
        colors: {
            "editor.background": "#161616",
            "editorError.background": built.error + "7f",
            "editorError.border": built.error,
            "editorError.foreground": built.error,
            "editorWarning.background": built.warning + "7f",
            "editorWarning.border": built.warning,
            "editorWarning.foreground": built.warning,
            "list.errorForeground": built.error,
            "list.warningForeground": built.warning,
            "activityBar.activeBackground": "#1C1C1C",
            "activityBar.activeBorder": built.ui.accent,
            "activityBar.activeFocusBorder": built.ui.accent,
            "activityBar.background": "#161616",
            "activityBar.dropBorder": built.ui.accent,
            "activityBar.inactiveForeground": "#b9b9b9",
            "activityBarBadge.background": "#DDDDDD",
            "activityBarBadge.foreground": "#161616",
            "button.background": built.ui.button,
            "button.foreground": "#DDDDDD",
            "button.hoverBackground": built.ui.buttonHover,
            "checkbox.background": "#303030",
            "dropdown.background": "#202020",
            "editor.foreground": "#DDDDDD",
            "editorGroupHeader.tabsBackground": "#1C1C1C",
            "editorLineNumber.activeForeground": "#b9b9b9",
            "editorLineNumber.foreground": "#5f5f5f",
            "editorLink.activeForeground": built.link,
            "focusBorder": built.ui.accent,
            "input.background": "#202020",
            "input.border": built.ui.border,
            "peekView.border": built.ui.accent,
            "peekViewEditor.background": "#202020",
            "peekViewEditor.matchHighlightBackground": built.ui.accent + "62",
            "peekViewEditorGutter.background": "#202020",
            "peekViewResult.matchHighlightBackground": built.ui.accent + "62",
            "sideBar.background": "#1C1C1C",
            "sideBarSectionHeader.background": "#1C1C1C",
            "statusBar.background": built.ui.button,
            "tab.activeBackground": "#161616",
            "tab.inactiveBackground": "#1C1C1C",
            "textLink.activeForeground": built.link,
            "textLink.foreground": built.ui.accent,
            "textPreformat.foreground": "#ffffff",
            "textSeparator.foreground": "#161616",
            "titleBar.activeBackground": "#1C1C1C",
            "titleBar.inactiveBackground": "#1C1C1C",
        }
    }
}
