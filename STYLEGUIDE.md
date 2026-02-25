# Detemiro Style Guide

This document defines coding standards for projects that use `eslint-config-detemiro`.

## 1. Linting Profiles

- `base`: a baseline ruleset for TypeScript projects.
- `strict`: an extended ruleset with architectural and project-structure constraints.

Recommended usage:

- use `base` for most projects;
- use `strict` for backend services and large frontend codebases with a long lifecycle.

## 2. TypeScript

- Always define explicit function return types.
- Use `interface` for object contracts.
- Always specify class member visibility (`public`/`protected`/`private`).
- Do not allow floating promises (promises must be awaited or handled).
- Unused variables and arguments are not allowed.

Allowed exception:

- prefix intentionally unused variables/arguments with `_`.

## 3. Imports

- Duplicate imports are not allowed.
- Local imports must not include file extensions.
- Import order must be stable and sorted (`simple-import-sort`).

## 4. One Module Per File

In `strict` mode:

- one file should contain only one primary type declaration:
- `class`, `interface`, `type`, or `enum`.

If multiple entities are needed, move them into separate files.

## 5. File and Declaration Naming (`strict`)

For `defs` structure:

- `defs/interfaces/*.interface.ts` -> one `interface` in `PascalCase`.
- `defs/types/*.type.ts` -> one `type` in `PascalCase`.
- `defs/enums/*.enum.ts` -> one `enum` in `PascalCase`.
- `defs/models/*.model.ts` and `defs/dto/*.dto.ts` -> one `class` in `PascalCase`.
- `defs/consts/*.const.ts` -> one `variable` in `camelCase`.

For suffix-based files:

- `*.service.ts(x)` -> `PascalCaseService`.
- `*.module.ts` -> `PascalCaseModule`.
- `*.controller.ts` -> `PascalCaseController`.
- `*.command.ts` -> `PascalCaseCommand`.
- `*.handler.*` -> `PascalCaseHandler`.
- `*.util.ts(x)`/`*.utils.ts(x)` -> functions/variables in `camelCase`.
- `*.decorator.ts`/`*.decorators.ts` -> declarations in `PascalCase`.

## 6. Module Architecture (`strict`)

Supported layers:

- `application`
- `pages`
- `widgets`
- `features`
- `entities`
- `infrastructure`
- `shared`

Principles:

- dependencies should flow downward between layers, not upward;
- `shared` must not depend on domain or application layers;
- imports within the same family/module are allowed;
- alias `~/*` is treated as `src/*`.

## 7. Folder Structure (`strict`)

- Use a predictable structure under `src`.
- `defs`, `interfaces`, `types`, `enums`, `models`, `dto`, `consts` directories must include `index.ts`.
- File names in `defs` directories must follow required patterns (`kebab-case` + suffixes).

## 8. Ignored Artifacts

The linter ignores technical and service files:

- `node_modules`, `dist`, `.yarn`, `.git*`
- `.eslintrc*`, `.prettier*`, `tsup*`
- `*.md`, `*.json`, `*.yml`, `Dockerfile`

## 9. Team Practices

- Write code that passes linting without inline disables.
- If a rule blocks a structurally correct solution, discuss changing the rule in the config first.
- Local exceptions (`eslint-disable`) should be rare and include a short reason.

## 10. Quick Start

`eslint.config.mjs` example for `base`:

```js
import baseConfig from 'eslint-config-detemiro'

export default [...baseConfig]
```

`eslint.config.mjs` example for `strict`:

```js
import strictConfig from 'eslint-config-detemiro/configs/strict'

export default [...strictConfig]
```
