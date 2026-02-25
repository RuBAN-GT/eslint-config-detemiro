import {
  createFileComposition,
  createIndependentModules,
  projectStructurePlugin,
} from 'eslint-plugin-project-structure'

export const structureRule = {
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    'project-structure': projectStructurePlugin,
  },
  rules: {
    'project-structure/file-composition': [
      'error',
      createFileComposition({
        filesRules: [
          {
            filePattern: '**/defs/interfaces/*.interface.ts',
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['interface'], limit: 1 }],
            rules: [
              {
                selector: ['interface'],
                scope: ['fileExport', 'fileRoot'],
                positionIndex: 0,
                format: '{PascalCase}',
              },
            ],
          },
          {
            filePattern: '**/defs/types/*.type.ts',
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['type'], limit: 1 }],
            rules: [
              {
                selector: ['type'],
                scope: ['fileExport', 'fileRoot'],
                positionIndex: 0,
                format: '{PascalCase}',
              },
            ],
          },
          {
            filePattern: '**/defs/enums/*.enum.ts',
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['enum'], limit: 1 }],
            rules: [
              {
                selector: ['enum'],
                scope: ['fileExport', 'fileRoot'],
                positionIndex: 0,
                format: '{PascalCase}',
              },
            ],
          },
          {
            filePattern: ['**/defs/models/*.model.ts', '**/defs/dto/*.dto.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['class'], limit: 1 }],
            rules: [
              {
                selector: ['class'],
                scope: ['fileExport', 'fileRoot'],
                positionIndex: 0,
                format: '{PascalCase}',
              },
            ],
          },
          {
            filePattern: ['**/defs/consts/*.const.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['variable'], limit: 1 }],
            rules: [
              {
                selector: ['variable'],
                scope: ['fileExport', 'fileRoot'],
                format: '{camelCase}',
              },
            ],
          },
          {
            filePattern: ['**/defs/consts/*.const.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rules: [
              {
                selector: ['variable'],
                scope: ['fileExport', 'fileRoot'],
                format: '{camelCase}',
              },
            ],
          },
          {
            filePattern: ['**/*.util.ts', '**/*.util.tsx'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [
              { selector: ['variable', 'variableExpression', 'arrowFunction', 'function'], limit: 1 },
            ],
            rules: [
              {
                selector: ['variable', 'variableExpression', 'arrowFunction', 'function'],
                scope: ['fileExport', 'fileRoot'],
                format: '{camelCase}',
              },
            ],
          },
          {
            filePattern: ['**/*.utils.ts', '**/*.utils.tsx'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rules: [
              {
                selector: ['variable', 'variableExpression', 'arrowFunction', 'function'],
                scope: ['fileExport', 'fileRoot'],
                format: '{camelCase}',
              },
            ],
          },
          {
            filePattern: ['**/*.decorator.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['variableExpression', 'arrowFunction', 'function'], limit: 1 }],
            rules: [
              {
                selector: ['variableExpression', 'arrowFunction', 'function'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}',
              },
            ],
          },
          {
            filePattern: ['**/*.decorators.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rules: [
              {
                selector: ['variableExpression', 'arrowFunction', 'function'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}',
              },
            ],
          },
          {
            filePattern: ['**/*.service.ts', '**/*.service.tsx'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['class'], limit: 1 }],
            rules: [
              {
                selector: ['class'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}Service',
              },
            ],
          },
          {
            filePattern: ['**/*.module.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['class'], limit: 1 }],
            rules: [
              {
                selector: ['class'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}Module',
              },
            ],
          },
          {
            filePattern: ['**/*.controller.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['class'], limit: 1 }],
            rules: [
              {
                selector: ['class'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}Controller',
              },
            ],
          },
          {
            filePattern: ['**/*.command.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['class'], limit: 1 }],
            rules: [
              {
                selector: ['class'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}Command',
              },
            ],
          },
          {
            filePattern: ['**/*.handler.*'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rootSelectorsLimits: [{ selector: ['class'], limit: 1 }],
            rules: [
              {
                selector: ['class'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}Handler',
              },
            ],
          },
          {
            filePattern: ['**/*.ts'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rules: [
              {
                selector: ['class'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}',
              },
              {
                selector: ['arrowFunction', 'function', 'variable', 'variableExpression', 'propertyDefinition'],
                scope: ['fileExport', 'fileRoot'],
                format: '{camelCase}',
              },
            ],
          },
          {
            filePattern: ['**/*.tsx'],
            allowOnlySpecifiedSelectors: {
              fileRoot: true,
              fileExport: true,
              nestedSelectors: false,
            },
            rules: [
              {
                selector: ['class', 'arrowFunction', 'variableExpression'],
                scope: ['fileExport', 'fileRoot'],
                format: '{PascalCase}',
              },
              {
                selector: ['function', 'variable', 'propertyDefinition'],
                scope: ['fileExport', 'fileRoot'],
                format: '{camelCase}',
              },
            ],
          },
        ],
      }),
    ],
    'project-structure/independent-modules': [
      'error',
      createIndependentModules({
        debugMode: true,
        pathAliases: {
          baseUrl: '.',
          paths: {
            '~/*': ['**/src/*'],
          },
        },
        reusableImportPatterns: {
          pages: ['**/pages/**'],
          application: ['**/application/**'],
          features: ['**/features/**'],
          widgets: ['**/widgets/**'],
          entities: ['**/entities/**'],
          infrastructure: ['**/infrastructure/**'],
          shared: ['**/shared/**'],
        },
        modules: [
          {
            name: 'Infrastructure',
            pattern: ['**/infrastructure/**/*.ts', '**/infrastructure/**/*.tsx'],
            allowImportsFrom: ['{family}/**', '{infrastructure}', '{shared}'],
            allowExternalImports: true,
          },
          {
            name: 'Application',
            pattern: ['**/application/**/*.ts', '**/application/**/*.tsx', '**/app/**/*.ts', '**/app/**/*.tsx'],
            allowImportsFrom: [
              '{family}/**',
              '{application}',
              '{pages}',
              '{widgets}',
              '{features}',
              '{entities}',
              '{infrastructure}',
              '{shared}',
            ],
            allowExternalImports: true,
          },
          {
            name: 'Pages',
            pattern: ['**/pages/**/*.ts', '**/pages/**/*.tsx'],
            allowImportsFrom: ['{family}/**', '{widgets}', '{entities}', '{features}', '{infrastructure}', '{shared}'],
            allowExternalImports: true,
          },
          {
            name: 'Widgets',
            pattern: ['**/widgets/**/*.ts', '**/widgets/**/*.tsx'],
            allowImportsFrom: ['{family}/**', '{entities}', '{features}', '{infrastructure}', '{shared}'],
            allowExternalImports: true,
          },
          {
            name: 'Features',
            pattern: ['**/features/**/*.ts', '**/features/**/*.tsx'],
            allowImportsFrom: ['{family}/**', '{infrastructure}', '{entities}', '{shared}'],
            allowExternalImports: true,
          },
          {
            name: 'Entities',
            pattern: ['**/entities/**/*.ts', '**/entities/**/*.tsx'],
            allowImportsFrom: ['{family}/**', '{entities}', '{infrastructure}', '{shared}'],
            allowExternalImports: true,
          },
          {
            name: 'Shared',
            pattern: ['**/shared/**/*.ts', '**/shared/**/*.tsx'],
            allowImportsFrom: [
              '**',
              '!{application}',
              '!{pages}',
              '!{widgets}',
              '!{features}',
              '!{entities}',
              '!{infrastructure}',
            ],
            allowExternalImports: true,
          },
        ],
      }),
    ],
  },
}
