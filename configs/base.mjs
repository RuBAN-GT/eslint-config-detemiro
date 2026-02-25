import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import pluginJs from '@eslint/js'

import { ignoreRule } from './rules/ignore.rule.mjs'
import { importRule } from './rules/import.rule.mjs'
import { importsRule } from './rules/import-sort.rule.mjs'
import { typescriptRule } from './rules/typescript.rule.mjs'

export default [
  typescriptRule,
  ignoreRule,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  importRule,
  importsRule,
  eslintPluginPrettierRecommended,
]
