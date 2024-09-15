module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:import/recommended',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
      rules: {
        'prettier/prettier': 'error',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            '': 'never',
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^(?!@|\\.)'],
              ['^@\\w'],
              ['^~'],
              ['^\\u0000'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ],
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              constructors: 'off',
            },
          },
        ],
      },
    },
  ],
}
