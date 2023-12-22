/*────────────────────────────────────────────────────────────────────────────*
  Copyright (c) 2023 Deimonn (a.k.a. Nahuel S. Cisterna)

  This file is licensed under the MIT License.

  See https://raw.githubusercontent.com/deimonn/oro-theme/master/LICENSE for
  license information.
 *────────────────────────────────────────────────────────────────────────────*/

import { generateThemeJSON } from "./theme"

import { mainTheme } from "./theme/main"
import { italicsTheme } from "./theme/italics"

import * as fs from "fs"

// Generate theme JSON files.
for (const theme of [mainTheme, italicsTheme]) {
    fs.writeFileSync(`dist/${theme.filename}`, generateThemeJSON(theme))
}
