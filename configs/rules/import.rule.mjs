import importPlugin from 'eslint-plugin-import'

export const importRule = {
  plugins: {
    import: importPlugin,
  },
  rules: {
    'no-duplicate-imports': 'error',
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
  },
}
