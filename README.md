# Generic Eslint rules

[![npm version](https://badge.fury.io/js/eslint-config-detemiro.svg)](https://badge.fury.io/js/eslint-config-detemiro)

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
yarn add eslint prettier @eslint/js eslint eslint-config-prettier globals eslint-plugin-import eslint-plugin-prettier eslint-plugin-simple-import-sort typescript-eslint -D
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

4. Configure your `eslint.config.mjs` by example:

```javascript
import detemiroConfig from 'eslint-config-detemiro'

export default [
  ...detemiroConfig,
  // Your customizations...
]
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
