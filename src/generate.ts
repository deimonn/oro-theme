/*─ generate.ts ──────────────────────────────────────────────────────────────*
  Generates the actual theme JSON files for distribution.
 *────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023-2024 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import { generateThemeJSON } from "./theme"

import { mainTheme, mainThemeItalics } from "./theme/main"

import * as fs from "fs"

// Create `dist` directory.
if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist")
}

// Generate theme JSON files.
for (const theme of [mainTheme(), mainThemeItalics()]) {
    fs.writeFileSync(`dist/${theme.filename}`, generateThemeJSON(theme))
}
