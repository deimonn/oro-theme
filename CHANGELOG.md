# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Improved markup styling; markdown is unchanged, but other markup formats
  should see better coloring now
- Improved macro coloring; now they will also be colored via syntax
  highlighting, not just semantic

## [1.2.0] - 2023-10-25

### Added

- Added support for Pylance-specific semantic highlighting
  - Special parameters `self` and `cls` are now colored as keywords
  - Language constants such as `True` and `False` are now colored as expected

### Changed

- Changed the color of preformatted text in default rendered markdown (like in
  settings or extension descriptions) to distinguish it from links

## [1.1.0] - 2023-08-18

### Added

- Added new colors and styling for markup; markdown files will be more colorful
  now

## [1.0.3] - 2023-08-01

### Changed

- Changelog format is now based on Keep a Changelog

### Fixed

- Extension no longer ships the screenshot source with it

## [1.0.2] - 2023-07-22

### Fixed

- Narrowed the scope of `static` so it only affects functions (before it would
  affect static classes in C# too, which was **not** intended)

## [1.0.1] - 2023-07-20

### Fixed

- Small fix to the README (VSCode was treating `#⁠13-18` as a git issue)

## [1.0.0] - 2023-07-20

- Initial release

[Unreleased]: https://github.com/deimonn/oro-theme/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/deimonn/oro-theme/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/deimonn/oro-theme/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/deimonn/oro-theme/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/deimonn/oro-theme/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/deimonn/oro-theme/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/deimonn/oro-theme/releases/tag/v1.0.0