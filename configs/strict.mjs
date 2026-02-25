import { foldersRule } from './rules/folders.rule.mjs'
import { oneModuleRule } from './rules/one-module.rule.mjs'
import { structureRule } from './rules/structure.rule.mjs'
import base from './base.mjs'

export default [
  foldersRule,
  ...base,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
      ],
    },
  },
  oneModuleRule,
  structureRule,
]
