# Generic Eslint rules

[![npm version](https://badge.fury.io/js/eslint-config-detemiro.svg)](https://badge.fury.io/js/eslint-config-detemiro)

The common eslint rules useful for any projects.

## Description

This project is a collection of rule and configs for any types of projects.

It includes:

- `eslint` configuration.
- `prettier` rules.
- project style guide: [`STYLEGUIDE.md`](./STYLEGUIDE.md).

And provides two ready-to-use configs:

- `base` - common rules for most projects.
- `strict` - additional architectural and naming constraints.

## Usage

1. Install the package:

```bash
yarn add eslint-config-detemiro -D
```

2. Add utility dependencies to your project (you can compare them with the `peerDependencies` of this repository):

```bash
yarn add eslint prettier @eslint/js eslint eslint-config-prettier globals eslint-plugin-import eslint-plugin-prettier eslint-plugin-simple-import-sort typescript-eslint eslint-plugin-project-structure -D
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
import baseConfig from 'eslint-config-detemiro'
// Optional strict rules:
// import strictConfig from 'eslint-config-detemiro/configs/strict'

export default [
  ...baseConfig,
  // Your customizations...
]
```

5. You are incredible! Now you can use the `eslint` and `prettier` in your project.

## Publishing

Run the **Publish npm** GitHub Actions workflow on `main`, specifying the version already committed in `package.json`. Dry-run mode is enabled by default; disable it explicitly to publish.

Configure an npm trusted publisher for `eslint-config-detemiro` with GitHub owner `RuBAN-GT`, repository `eslint-config-detemiro`, and workflow filename `publish.yml`. Leave the environment blank and allow direct `npm publish`. The workflow uses OIDC and provenance, without npm tokens or OTP codes.

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
