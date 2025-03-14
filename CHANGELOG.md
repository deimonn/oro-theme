# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.7.0](https://github.com/deimonn/oro-theme/compare/v2.6.0...v2.7.0-preview) - 2025-03-14

### Added

- Introduced 'Original' variant of the Oro Theme, replicating it as it was before v2.6.0.

### Changed

- Main theme changes
  - Primitive types provided by the standard library (like `int32_t` in C/C++) now get their own distinct style
  - Macros now take after keywords rather than punctuation

## [2.6.0](https://github.com/deimonn/oro-theme/compare/v2.5.0...v2.6.0) - 2024-12-30

### Removed

- Removed static function colorization; will now be colored the same as any other function

## [2.5.0](https://github.com/deimonn/oro-theme/compare/v2.4.1...v2.5.0) - 2024-07-25

### Added

- Improved namespace colorization; namespaces should be detected in more syntaxes

## [2.4.1](https://github.com/deimonn/oro-theme/compare/v2.4.0...v2.4.1) - 2024-04-19

### Fixed

- Fixed the color of an inactive selection in a tree or list (such as in the file explorer) being so dark it was barely visible

## [2.4.0](https://github.com/deimonn/oro-theme/compare/v2.3.0-preview...v2.4.0) - 2024-02-29

This update officializes the additions, changes and fixes from the [2.2.0](#220-pre-release---2024-01-14), [2.2.1](#221-pre-release---2024-01-14) and [2.3.0](#230-pre-release---2024-01-24) pre-releases.

It also marks the beginning of this extension's releases on [open-vsx.org](https://open-vsx.org/extension/deimonn/oro-theme).

### Changed

- Updated the extension description to be fancier and show off more of the theme's features

## [2.3.0](https://github.com/deimonn/oro-theme/compare/v2.2.1-preview...v2.3.0-preview) (Pre-release) - 2024-01-24

### Added

- Added color for icon indicating a running process on a forwarded port

### Changed

- Changed search highlighting styling; uses own unique color now and should be more readable
- Changed badge styling

## [2.2.1](https://github.com/deimonn/oro-theme/compare/v2.2.0-preview...v2.2.1-preview) (Pre-release) - 2024-01-14

### Fixed

- Forgot to update two colors in the improved generator, oops

## [2.2.0](https://github.com/deimonn/oro-theme/compare/v2.1.1...v2.2.0-preview) (Pre-release) - 2024-01-14

### Added

- Added missing foreground styles
- Added style for `info` diagnostics
- Added style for diagnostic messages in the settings interface
- Added style for diagnostic icons in problems and notifications
- Added styles for diagnostic problem navigation
- Added style for diagnostic markers in the overview ruler and minimap
- Added styles for "added", "deleted", "ignored", "modified" and "untracked" resources and settings
- Added styles for selection and search highlighting
- Added styles for indentation guides
- Added styles for line folds
- Added styles for a lot of widgets, such as the hover and auto-complete widgets
- Added styles for tabs when the "single tab" setting is enabled
- Added style for drop backgrounds
- Added unique styles for the status bar when debugging code or when no folders are open
- Added special styles for the [ErrorLens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) extension
- And various other miscellaneous styles

### Changed

- Changed style of dropdowns to be more inline with other controls
- Changed style of editor tabs; you can more noticeably see which one you're hovering over now, as well as easily tell which tab is currently active
- Changed style of the peek view
- Changed hover style of the "Open a Remote Window" status bar item
- Changed a whole lot of theme generation internals

## [2.1.1](https://github.com/deimonn/oro-theme/compare/v2.1.0...v2.1.1) - 2023-12-20

### Fixed

- Fixed extension changelog treating 2.1.0 as Unreleased

## [2.1.0](https://github.com/deimonn/oro-theme/compare/v2.0.1...v2.1.0) - 2023-12-20

### Added

- Added support for clangd-specific mutable reference and pointer semantic modifiers; passing pointers or references as mutable will get an underline now just like in rust-analyzer

## [2.0.1](https://github.com/deimonn/oro-theme/compare/v2.0.0...v2.0.1) - 2023-12-05

### Fixed

- Pushed the new, more concise, extension description; this was originally meant to be part of 2.0.0, hence the fix treatment

## [2.0.0](https://github.com/deimonn/oro-theme/compare/v1.3.0...v2.0.0) - 2023-12-05

### Added

- New theme variant; "Oro Theme (Italics)"

### Changed

- Extension has a new logo
- Extension name shortened to just "Oro Theme"
- Main theme renamed to "Oro Theme" (may need updating in settings)
- Severe changes to the internal project structure
  - Theme is now programatically generated, reducing amount of possible bugs
  - The groundwork has been made to allow for easy creation of more theme variants in the future

### Fixed

- Fixed enum members having different colors when colored by syntax highlighting vs semantic
- Fixed comments having different colors when colored by syntax highlighting vs semantic

## [1.3.0](https://github.com/deimonn/oro-theme/compare/v1.2.0...v1.3.0) - 2023-11-29

### Added

- Improved markup styling; markdown is unchanged, but other markup formats should see better coloring now
- Improved macro coloring; now they will also be colored via syntax highlighting, not just semantic

## [1.2.0](https://github.com/deimonn/oro-theme/compare/v1.1.0...v1.2.0) - 2023-10-25

### Added

- Added support for Pylance-specific semantic highlighting
  - Special parameters `self` and `cls` are now colored as keywords
  - Language constants such as `True` and `False` are now colored as expected

### Changed

- Changed the color of preformatted text in default rendered markdown (like in settings or extension descriptions) to distinguish it from links

## [1.1.0](https://github.com/deimonn/oro-theme/compare/v1.0.3...v1.1.0) - 2023-08-18

### Added

- Added new colors and styling for markup; markdown files will be more colorful now

## [1.0.3](https://github.com/deimonn/oro-theme/compare/v1.0.2...v1.0.3) - 2023-08-01

### Changed

- Changelog format is now based on Keep a Changelog

### Fixed

- Extension no longer ships the screenshot source with it

## [1.0.2](https://github.com/deimonn/oro-theme/compare/v1.0.1...v1.0.2) - 2023-07-22

### Fixed

- Narrowed the scope of `static` so it only affects functions (before it would affect static classes in C# too, which was **not** intended)

## [1.0.1](https://github.com/deimonn/oro-theme/compare/v1.0.0...v1.0.1) - 2023-07-20

### Fixed

- Small fix to the README (VSCode was treating `#⁠13-18` as a git issue)

## [1.0.0](https://github.com/deimonn/oro-theme/releases/tag/v1.0.0) - 2023-07-20

- Initial release
