import simpleImportSort from 'eslint-plugin-simple-import-sort'

export const importsRule = {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
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
  },
}
