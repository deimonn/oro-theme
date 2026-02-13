/*── generate.ts ── Theme generator ──*
 │
 │ Copyright (c) 2023-2026 Deimonn
 │
 │ This file is licensed under the MIT License.
 │
 │ See https://deimonn.dev/oro-theme/license.txt for license information.
 │
 */

// SPDX-License-Identifier: MIT

import { OroTheme, buildTheme } from "./oro/theme";
import { VSCodeTheme } from "./vscode/theme";

import { mainTheme, mainThemeItalics } from "./oro/themes/main";
import { originalTheme, originalThemeItalics } from "./oro/themes/original";

import * as fs from "fs";

// Create `dist` directory.
if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

// Generate theme JSON files.
const themes = [
    mainTheme(), mainThemeItalics(),
    originalTheme(), originalThemeItalics()
];

for (const theme of themes) {
    fs.writeFileSync(
        `dist/${theme.filename}`,
        JSON.stringify(generateTheme(theme), null, 4)
    );
}

/*───────────*
 │ Generator
 */

/** Generates a VSCode theme from an Oro theme definition object. */
function generateTheme(theme: OroTheme): VSCodeTheme {
    const built = buildTheme(theme);
    return {
        $schema: "vscode://schemas/color-theme",

        /*─────────────────*
         │ Semantic tokens
         */
        semanticHighlighting: true,
        semanticTokenColors: {
            /*───────*
             │ Types
             */

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

            // Standard library types.
            "type.defaultLibrary": built.standardType.semanticTokenColor,
            // Exception for aliases in rust-analyzer.
            "typeAlias.defaultLibrary": {
                foreground: built.userType.color.hex(),
                fontStyle: ""
            },

            // Built-in types in rust-analyzer.
            builtinType: built.builtinType.semanticTokenColor,
            // Derives in rust-analyzer.
            derive: built.interfaceType.semanticTokenColor,

            /*──────────*
             │ Keywords
             */

            // Keywords, modifiers and operations.
            keyword: built.keyword.semanticTokenColor,
            operator: built.operator.semanticTokenColor,

            // Keywords in Pylance.
            selfParameter: built.keyword.semanticTokenColor,
            clsParameter: built.keyword.semanticTokenColor,

            // Lifetimes in rust-analyzer.
            lifetime: built.keyword.semanticTokenColor,

            /*───────────────*
             │ Function-like
             */

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

            /*───────────────────────*
             │ Variables & constants
             */

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

            /*───────────────*
             │ Miscellaneous
             */

            // Namespaces.
            namespace: built.namespace.semanticTokenColor,

            // Comments.
            comment: built.comment.semanticTokenColor,

            // Punctuation in rust-analyzer.
            punctuation: built.punctuation.semanticTokenColor,
            formatSpecifier: built.punctuation.semanticTokenColor,

            /*───────────*
             │ Modifiers
             */

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

        /*────────────────*
         │ TextMate rules
         */
        tokenColors: [
            // Invalid.
            {
                scope: "invalid.illegal",
                settings: {
                    foreground: built.error.hexa(),
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
                scope: [
                    "entity.name.type.namespace",
                    "entity.name.namespace"
                ],
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

        /*───────*
         │ Other
         */
        colors: {
            /*──────*
             │ Misc
             */

            // Foregrounds.
            "foreground": built.foreground.hex(),
            "errorForeground": built.error.hex(),

            // Badge.
            "badge.background": built.badge.hex(),
            "badge.foreground": built.badgeForeground.hex(),

            // Modified setting.
            "settings.modifiedItemIndicator": built.modified.hex(),

            // Diff.
            "diffEditor.insertedLineBackground": built.added.fade(.90).hexa(),
            "diffEditor.insertedTextBackground": built.added.fade(.80).hexa(),
            "diffEditor.removedLineBackground": built.deleted.fade(.80).hexa(),
            "diffEditor.removedTextBackground": built.deleted.fade(.80).hexa(),

            // Drop background.
            "list.dropBackground": built.guide.fade(.75).hexa(),
            "terminal.dropBackground": built.guide.fade(.75).hexa(),
            "sideBar.dropBackground": built.guide.fade(.75).hexa(),
            "editorGroup.dropBackground": built.guide.fade(.75).hexa(),
            "panelSection.dropBackground": built.guide.fade(.75).hexa(),

            // Progress bar.
            "progressBar.background": built.accent.hex(),

            // Running process on forwarded port.
            "ports.iconRunningProcessForeground": built.running.hex(),

            /*────────*
             │ Editor
             */

            // General.
            "editor.background": built.background.hex(),
            "editor.foreground": built.foreground.hex(),
            "editorPane.background": built.background.darken(.20).hex(),
            "editorCursor.background": built.background.hex(),
            "editorCursor.foreground": built.foreground.hex(),
            "editorLink.activeForeground": built.linkHover.hex(),
            "editorOverviewRuler.border": built.background.hex(),

            // Guides.
            "editor.foldBackground": built.guide.darken(.50).hex(),

            "editor.lineHighlightBackground": built.background.hex(),
            "editor.lineHighlightBorder": built.guide.fade(.50).hexa(),

            "editorLineNumber.activeForeground": built.guideFocus.hex(),
            "editorLineNumber.foreground": built.guide.hex(),

            "editorRuler.foreground": built.guide.hex(),
            "editorWhitespace.foreground": built.guide.hex(),

            // Bracket matching and indentation.
            "editorBracketMatch.background": "#00000000",
            "editorBracketMatch.border": built.punctuation.color.hex(),

            "editorOverviewRuler.bracketMatchForeground":
                built.punctuation.color.hex(),

            "editorIndentGuide.activeBackground":
                built.guideFocus.darken(.50).hex(),
            "editorIndentGuide.background":
                built.guide.darken(.50).hex(),

            // Tabs.
            "tab.activeBackground": built.background.hex(),
            "tab.inactiveBackground": built.backgroundSecondary.hex(),
            "tab.border": "#00000000",
            "tab.activeBorder": "#00000000",
            "tab.activeBorderTop": built.accent.hex(),
            "tab.hoverBackground": built.backgroundSecondary.lighten(.25).hex(),
            "tab.lastPinnedBorder": built.guide.hex(),

            "editorGroupHeader.noTabsBackground":
                built.backgroundSecondary.hex(),
            "editorGroupHeader.tabsBackground":
                built.backgroundSecondary.hex(),

            "editorGroup.border": built.guide.hex(),

            // Peek view.
            "peekView.border": built.accent.hex(),
            "peekViewEditor.background": built.backgroundPeek.hex(),
            "peekViewEditorGutter.background": built.backgroundPeek.hex(),

            "peekViewEditor.matchHighlightBackground":
                built.accent.fade(.62).hexa(),
            "peekViewResult.matchHighlightBackground":
                built.accent.fade(.62).hexa(),

            "peekViewResult.background": built.backgroundSecondary.hex(),
            "peekViewTitle.background": built.accent.darken(.75).hex(),

            // Various widgets.
            "editorHoverWidget.background": built.widget.hex(),
            "editorHoverWidget.border": built.widgetBorder.hex(),

            "editorSuggestWidget.background": built.widget.hex(),
            "editorSuggestWidget.border": built.widgetBorder.hex(),
            "editorSuggestWidget.highlightForeground": built.accent.hex(),

            "editorWidget.background": built.widget.hex(),
            "editorWidget.resizeBorder": built.widgetBorder.hex(),

            // Selection.
            "editor.selectionBackground": built.accent.fade(.80).hexa(),
            "editor.selectionHighlightBorder": built.accent.fade(.60).hexa(),

            "minimap.selectionHighlight":
                built.accent.fade(.60).hexa(),
            "editorOverviewRuler.selectionHighlightForeground":
                built.accent.fade(.60).hexa(),

            // Search.
            "editor.findMatchBorder": built.matchFocus.hex(),
            "editor.findMatchHighlightBackground": built.match.fade(.75).hexa(),
            "editorOverviewRuler.findMatchForeground": built.match.hex(),
            "minimap.findMatchHighlight": built.match.hex(),

            /*───────────*
             │ Interface
             */

            // Activity bar.
            "activityBar.activeBackground": built.backgroundSecondary.hex(),
            "activityBar.activeBorder": built.accent.hex(),
            "activityBar.activeFocusBorder": built.accent.hex(),

            "activityBar.background": built.background.hex(),
            "activityBar.dropBorder": built.accent.hex(),
            "activityBar.inactiveForeground": built.foregroundInactive.hex(),

            "activityBarBadge.background": built.badge.hex(),
            "activityBarBadge.foreground": built.badgeForeground.hex(),

            // Side bar.
            "sideBar.background": built.backgroundSecondary.hex(),
            "sideBarSectionHeader.background": built.backgroundSecondary.hex(),

            // Status bar.
            "statusBar.foreground": built.statusBarForeground.hex(),
            "statusBar.background": built.statusBar.hex(),
            "statusBar.debuggingBackground": built.statusBarDebugging.hex(),
            "statusBar.noFolderBackground": built.statusBarNoFolder.hex(),

            "statusBarItem.remoteBackground": built.foreground.hex(),
            "statusBarItem.remoteForeground": built.background.hex(),

            "statusBarItem.remoteHoverBackground":
                built.foreground.darken(.50).hex(),
            "statusBarItem.remoteHoverForeground":
                built.foreground.hex(),

            "statusBar.focusBorder": built.statusBarForeground.hex(),

            // Title bar.
            "titleBar.activeBackground": built.backgroundSecondary.hex(),
            "titleBar.inactiveBackground": built.backgroundSecondary.hex(),

            // Scroll bar.
            "scrollbarSlider.activeBackground": built.scrollBarActive.hexa(),
            "scrollbarSlider.background": built.scrollBar.hexa(),
            "scrollbarSlider.hoverBackground": built.scrollBar.hexa(),

            // Panels.
            "panel.dropBorder": built.accent.hex(),
            "panelTitle.activeBorder": built.accent.hex(),
            "terminal.selectionBackground": built.accent.fade(.80).hexa(),
            "terminalCursor.background": built.background.hex(),
            "terminalCursor.foreground": built.foreground.hex(),

            // Notification.
            "notifications.background": built.widget.hex(),
            "notifications.border": built.widgetBorder.hex(),

            // Lists.
            "list.activeSelectionBackground": built.accent.fade(.75).hexa(),
            "list.focusBackground": built.accent.fade(.75).hexa(),
            "list.hoverBackground": built.accent.fade(.90).hexa(),
            "list.highlightForeground": built.accent.hex(),
            "list.inactiveSelectionBackground": built.accent.fade(.80).hexa(),

            // Menus.
            "menu.background": built.widget.hex(),
            "menu.foreground": built.foreground.hex(),
            "menu.selectionBackground": built.accent.hex(),
            "menu.selectionForeground": built.background.hex(),
            "menu.separatorBackground": built.widgetBorder.hex(),

            // All borders.
            "focusBorder": built.accent.hex(),

            /*──────────*
             │ Controls
             */

            // Button.
            "button.background": built.button.hex(),
            "button.foreground": built.foreground.hex(),
            "button.hoverBackground": built.buttonHover.hex(),

            // Checkbox.
            "checkbox.background": built.checkbox.hex(),

            // Input.
            "input.background": built.input.hex(),
            "input.border": built.inputBorder.hex(),

            // Dropdown.
            "dropdown.background": built.input.hex(),
            "dropdown.border": built.inputBorder.hex(),

            /*──────*
             │ Text
             */

            // Link.
            "textLink.activeForeground": built.linkHover.hex(),
            "textLink.foreground": built.link.hex(),

            // Preformat.
            "textPreformat.foreground": built.preformat.hex(),

            // Separator.
            "textSeparator.foreground": built.background.hex(),

            // Selection.
            "selection.background": built.accent.fade(.80).hexa(),

            /*───────────*
             │ Resources
             */

            // Git decorations.
            "gitDecoration.addedResourceForeground":
                built.added.hex(),
            "gitDecoration.deletedResourceForeground":
                built.deleted.hex(),
            "gitDecoration.stageDeletedResourceForeground":
                built.deleted.hex(),
            "gitDecoration.ignoredResourceForeground":
                built.ignored.hex(),
            "gitDecoration.modifiedResourceForeground":
                built.modified.hex(),
            "gitDecoration.stageModifiedResourceForeground":
                built.modified.hex(),
            "gitDecoration.untrackedResourceForeground":
                built.untracked.hex(),

            // Minimap.
            "minimapGutter.addedBackground": built.added.hex(),
            "minimapGutter.deletedBackground": built.deleted.hex(),
            "minimapGutter.modifiedBackground": built.modified.hex(),

            // Gutter.
            "editorGutter.addedBackground": built.added.hex(),
            "editorGutter.modifiedBackground": built.modified.hex(),
            "editorGutter.deletedBackground": built.deleted.hex(),

            // Overview ruler.
            "editorOverviewRuler.addedForeground":
                built.added.fade(.50).hexa(),
            "editorOverviewRuler.modifiedForeground":
                built.modified.fade(.50).hexa(),
            "editorOverviewRuler.deletedForeground":
                built.deleted.fade(.50).hexa(),

            /*─────────────*
             │ Diagnostics
             */

            // In editor.
            "editorError.background": built.error.fade(.50).hexa(),
            "editorError.foreground": built.error.hex(),
            "editorError.border": built.error.hex(),

            "editorWarning.background": built.warning.fade(.50).hexa(),
            "editorWarning.foreground": built.warning.hex(),
            "editorWarning.border": built.warning.hex(),

            "editorInfo.background": built.info.fade(.75).hexa(),
            "editorInfo.foreground": built.info.hex(),
            "editorInfo.border": built.info.hex(),

            // In list.
            "list.errorForeground": built.error.hex(),
            "list.warningForeground": built.warning.hex(),

            // Problems.
            "problemsErrorIcon.foreground": built.error.hex(),
            "problemsWarningIcon.foreground": built.warning.hex(),
            "problemsInfoIcon.foreground": built.info.hex(),

            // Problem navigation.
            "editorMarkerNavigation.background": built.widget.hex(),
            "editorMarkerNavigationError.background": built.error.hex(),
            "editorMarkerNavigationInfo.background": built.info.hex(),
            "editorMarkerNavigationWarning.background": built.warning.hex(),

            // Notifications.
            "notificationsErrorIcon.foreground": built.error.hex(),
            "notificationsWarningIcon.foreground": built.warning.hex(),
            "notificationsInfoIcon.foreground": built.info.hex(),

            // Minimap.
            "minimap.background": built.background.hex(),
            "minimap.errorHighlight": built.error.hex(),
            "minimap.warningHighlight": built.warning.hex(),

            // Overview ruler.
            "editorOverviewRuler.errorForeground": built.error.hex(),
            "editorOverviewRuler.warningForeground": built.warning.hex(),
            "editorOverviewRuler.infoForeground": built.info.hex(),

            // Input validation in settings.
            "inputValidation.errorBackground":
                built.error.darken(.75).hex(),
            "inputValidation.errorBorder":
                built.error.hex(),
            "inputValidation.errorForeground":
                built.error.lighten(.25).hex(),

            "inputValidation.warningBackground":
                built.warning.darken(.75).hex(),
            "inputValidation.warningBorder":
                built.warning.hex(),
            "inputValidation.warningForeground":
                built.warning.lighten(.25).hex(),

            "inputValidation.infoBackground":
                built.info.darken(.75).hex(),
            "inputValidation.infoBorder":
                built.info.hex(),
            "inputValidation.infoForeground":
                built.info.lighten(.25).hex(),

            /*───────────*
             │ ErrorLens
             */

            // Error colors.
            "errorLens.errorForeground":
                built.error.hex(),
            "errorLens.errorBackground":
                built.error.fade(.90).hexa(),
            "errorLens.errorMessageBackground":
                built.error.fade(.90).hexa(),
            "errorLens.errorRangeBackground":
                "#00000000",

            // Warning colors.
            "errorLens.warningForeground":
                built.warning.hex(),
            "errorLens.warningBackground":
                built.warning.fade(.90).hexa(),
            "errorLens.warningMessageBackground":
                built.warning.fade(.90).hexa(),
            "errorLens.warningRangeBackground":
                "#00000000",

            // Info colors.
            "errorLens.infoForeground":
                built.info.hex(),
            "errorLens.infoBackground":
                built.info.fade(.90).hexa(),
            "errorLens.infoMessageBackground":
                built.info.fade(.90).hexa(),
            "errorLens.infoRangeBackground":
                "#00000000",

            // Hint colors.
            "errorLens.hintForeground":
                built.ignored.hex(),
            "errorLens.hintBackground":
                built.ignored.fade(.90).hexa(),
            "errorLens.hintMessageBackground":
                built.ignored.fade(.90).hexa(),
            "errorLens.hintRangeBackground":
                "#00000000",
        }
    };
}
