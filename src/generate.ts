/*─ generate.ts ──────────────────────────────────────────────────────────────*
  Generates the actual theme JSON files for distribution.
 *────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023-2024 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import { OroTheme, buildTheme } from "./oro/theme"
import { VSCodeTheme } from "./vscode/theme"

import { mainTheme, mainThemeItalics } from "./oro/themes/main"

import * as fs from "fs"

// Create `dist` directory.
if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist")
}

// Generate theme JSON files.
for (const theme of [mainTheme(), mainThemeItalics()]) {
    fs.writeFileSync(
        `dist/${theme.filename}`,
        JSON.stringify(generateTheme(theme))
    )
}

/*────────────────────────────────────────────────────────────────────────────*
  Generator
 *────────────────────────────────────────────────────────────────────────────*/

/** Generates a VSCode theme from an Oro theme definition object. */
function generateTheme(theme: OroTheme): VSCodeTheme {
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
                    foreground: built.error,
                    fontStyle: ""
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
