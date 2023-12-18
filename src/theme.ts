/*────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import { TokenStyle, scopeStyle } from './style'

/** Theme definition object. */
export type Theme = {
    /** The name to give to the theme. */
    name: string
    /** The name to give to the theme file. */
    filename: string

    /** Style for keywords. */
    keyword: TokenStyle
    /** Style for operators. */
    operator: TokenStyle

    /** Style for user-defined types, such as classes. */
    userType: TokenStyle
    /** Style for built-in types. */
    builtinType: TokenStyle
    /** Style for interface or interface-like types. */
    interfaceType: TokenStyle

    /** Style for functions. */
    function: TokenStyle
    /** Style for static functions. */
    staticFunction: TokenStyle

    /** Style for constants and enumeration members. */
    constant: TokenStyle
    /** Style for built-in constants, such as `true`. */
    builtinConstant: TokenStyle

    /** Style for enumerations. */
    enumeration: TokenStyle
    /** Style for namespaces. */
    namespace: TokenStyle
    /** Style for macros. */
    macro: TokenStyle
    /** Style for variables. */
    variable: TokenStyle
    /** Style for numbers. */
    number: TokenStyle
    /** Style for punctuation. */
    punctuation: TokenStyle
    /** Style for comments. */
    comment: TokenStyle

    /** Style for strings. */
    string: TokenStyle
    /** Style for escape sequences. */
    escape: TokenStyle

    /** Color for errors and illegal code. */
    error: string
    /** Color for warnings. */
    warning: string
    /** Link color. */
    link: string

    /** UI dark accent color. */
    ui: {
        /** Accenting color. */
        accent: string
        /** Dark color currently only used for input borders. */
        border: string
        /** Button and status bar color. */
        button: string
        /** Button color on hover. */
        buttonHover: string
    }
}

/** Generate theme JSON from a theme definition object. */
export function generateThemeJSON(theme: Theme) {
    return JSON.stringify({
        $schema: "vscode://schemas/color-theme",
        name: theme.name,
        semanticHighlighting: true,
        semanticTokenColors: {
            // User type.
            class: theme.userType,
            struct: theme.userType,
            type: theme.userType,

            // Built-in type.
            builtinType: theme.builtinType, // in rust-analyzer

            // Interface-like type.
            typeParameter: theme.interfaceType,
            interface: theme.interfaceType,
            derive: theme.interfaceType, // in rust-analyzer

            // Enumeration.
            enum: theme.enumeration,
            enumMember: theme.constant,

            // Namespace.
            namespace: theme.namespace,

            // Keywords, modifiers and operations.
            keyword: theme.keyword,
            operator: theme.operator,
            lifetime: theme.keyword,      // in rust-analyzer
            selfParameter: theme.keyword, // in Pylance
            clsParameter: theme.keyword,  // in Pylance

            // Function-like.
            function: theme.function,
            method: theme.function,
            label: theme.function,
            decorator: theme.function,

            // Static function-like.
            "function.static": theme.staticFunction,
            "method.static": theme.staticFunction,

            // Macro.
            macro: theme.macro,

            // Variable-like.
            parameter: theme.variable,
            property: theme.variable,
            variable: theme.variable,
            event: theme.variable,

            // Constant.
            boolean: theme.builtinConstant,         // in rust-analyzer
            builtinConstant: theme.builtinConstant, // in Pylance

            // Comment.
            comment: theme.comment,

            // String-like.
            string: theme.string,
            regexp: theme.string,
            escapeSequence: theme.escape, // in rust-analyzer

            // Number.
            number: theme.number,

            // Punctuation.
            punctuation: theme.punctuation,     // in rust-analyzer
            formatSpecifier: theme.punctuation, // in rust-analyzer

            // Semantic modifiers.
            "*.deprecated":   { fontStyle: "strikethrough" },
            "*.modification": { fontStyle: "underline" },
            "*.mutable":      { fontStyle: "underline" }, // in rust-analyzer
            "*.consuming":    { fontStyle: "bold" },      // in rust-analyzer
        },
        tokenColors: [
            // Invalid.
            {
                scope: "invalid.illegal",
                settings: scopeStyle(theme.error)
            },
            // User type.
            {
                scope: [
                    "entity.name.type",
                    "entity.name.type.class",
                    "entity.name.type.struct"
                ],
                settings: scopeStyle(theme.userType)
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
                settings: scopeStyle(theme.builtinType)
            },
            // Interface-like type.
            {
                scope: [
                    "entity.name.type.interface",
                    "entity.name.type.parameter"
                ],
                settings: scopeStyle(theme.interfaceType)
            },
            // Enumeration.
            {
                scope: "entity.name.type.enum",
                settings: scopeStyle(theme.enumeration)
            },
            {
                scope: "variable.other.enummember",
                settings: scopeStyle(theme.constant)
            },
            // Namespace.
            {
                scope: "entity.name.type.namespace",
                settings: scopeStyle(theme.namespace)
            },
            // Keywords, modifiers and operators.
            {
                scope: ["keyword", "storage", "variable.language"],
                settings: scopeStyle(theme.keyword)
            },
            {
                scope: "keyword.operator",
                settings: scopeStyle(theme.operator)
            },
            // Macro-like.
            {
                scope: "entity.name.function.preprocessor",
                settings: scopeStyle(theme.macro)
            },
            // Function-like.
            {
                scope: "entity.name.function",
                settings: scopeStyle(theme.function)
            },
            // Variable-like.
            {
                scope: [
                    "variable",
                    "entity.name.variable",
                    "entity.name.type.module"
                ],
                settings: scopeStyle(theme.variable)
            },
            // Constant.
            {
                scope: "constant",
                settings: scopeStyle(theme.constant)
            },
            {
                scope: "constant.language",
                settings: scopeStyle(theme.builtinConstant)
            },
            // Comment.
            {
                scope: ["comment", "punctuation.definition.comment"],
                settings: scopeStyle(theme.comment)
            },
            // String-like.
            {
                scope: "string",
                settings: scopeStyle(theme.string)
            },
            {
                scope: "constant.character.escape",
                settings: scopeStyle(theme.escape)
            },
            // Number.
            {
                scope: "constant.numeric",
                settings: scopeStyle(theme.number)
            },
            // Punctuation.
            {
                scope: "punctuation",
                settings: scopeStyle(theme.punctuation)
            },
            // Misc.
            {
                scope: "entity.name.tag",
                settings: scopeStyle(theme.constant)
            },
            {
                scope: "support.type.property-name",
                settings: scopeStyle(theme.function)
            },
            // Markup header.
            {
                scope: ["markup.heading", "entity.name.section"],
                settings: scopeStyle(theme.keyword)
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
                settings: scopeStyle(theme.punctuation)
            },
            // Markup quote.
            {
                scope: "markup.quote",
                settings: scopeStyle(theme.punctuation)
            },
            // Markup list bullet.
            {
                scope: "markup.list.bullet",
                settings: scopeStyle(theme.punctuation)
            }
        ],
        colors: {
            "editor.background": "#161616",
            "editorError.background": theme.error + '7f',
            "editorError.border": theme.error,
            "editorError.foreground": theme.error,
            "editorWarning.background": theme.warning + '7f',
            "editorWarning.border": theme.warning,
            "editorWarning.foreground": theme.warning,
            "list.errorForeground": theme.error,
            "list.warningForeground": theme.warning,
            "activityBar.activeBackground": "#1C1C1C",
            "activityBar.activeBorder": theme.ui.accent,
            "activityBar.activeFocusBorder": theme.ui.accent,
            "activityBar.background": "#161616",
            "activityBar.dropBorder": theme.ui.accent,
            "activityBar.inactiveForeground": "#b9b9b9",
            "activityBarBadge.background": "#DDDDDD",
            "activityBarBadge.foreground": "#161616",
            "button.background": theme.ui.button,
            "button.foreground": "#DDDDDD",
            "button.hoverBackground": theme.ui.buttonHover,
            "checkbox.background": "#303030",
            "dropdown.background": "#202020",
            "editor.foreground": "#DDDDDD",
            "editorGroupHeader.tabsBackground": "#1C1C1C",
            "editorLineNumber.activeForeground": "#b9b9b9",
            "editorLineNumber.foreground": "#5f5f5f",
            "editorLink.activeForeground": theme.link,
            "focusBorder": theme.ui.accent,
            "input.background": "#202020",
            "input.border": theme.ui.border,
            "peekView.border": theme.ui.accent,
            "peekViewEditor.background": "#202020",
            "peekViewEditor.matchHighlightBackground": theme.ui.accent + '62',
            "peekViewEditorGutter.background": "#202020",
            "peekViewResult.matchHighlightBackground": theme.ui.accent + '62',
            "sideBar.background": "#1C1C1C",
            "sideBarSectionHeader.background": "#1C1C1C",
            "statusBar.background": theme.ui.button,
            "tab.activeBackground": "#161616",
            "tab.inactiveBackground": "#1C1C1C",
            "textLink.activeForeground": theme.link,
            "textLink.foreground": theme.ui.accent,
            "textPreformat.foreground": "#ffffff",
            "textSeparator.foreground": "#161616",
            "titleBar.activeBackground": "#1C1C1C",
            "titleBar.inactiveBackground": "#1C1C1C",
        }
    })
}
