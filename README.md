# Generic Eslint rules

The common eslint rules useful for any projects.

## Description

This project is a collection of rule and configs for any types of projects.

It includes:

- `eslint` configuration.
- `prettier` rules.

## Usage

1. Install the package:

```bash
yarn add eslint-config-detemiro -D
```

2. Add utility dependencies to your project (you can compare them with the `peerDependencies` of this repository):

```bash
yarn add eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-import eslint-config-airbnb-typescript -D
```

3. Connect the `prettier` configuration to your project in `.prettierrc.js`:

```javascript
module.exports = require('eslint-config-detemiro/prettier')
```

or in json:

```json
{
  "extends": "eslint-config-detemiro/prettier"
}
```

4. Configure your `.eslintrc.js` by example:

```javascript
module.exports = {
  extends: ['eslint-config-detemiro'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
```

5. You are incredible! Now you can use the `eslint` and `prettier` in your project.

## Contributing

I welcome contributions! Follow these steps to contribute:

1. Setup environment
    1. Fork the repository.
    2. Clone your forked repository.
    3. Install dependencies by running `yarn install`.
2. Making Changes
    1. Create a new branch for your changes.
    2. Make your changes and commit them.
    3. Push your changes to your forked repository.
3. Submitting a Pull Request
    1. Go to the original repository on GitHub and click the "New pull request" button.
    2. Select your branch and submit the pull request.
    3. Wait for the review and address any feedback.

You are the star of this project! 🌟
