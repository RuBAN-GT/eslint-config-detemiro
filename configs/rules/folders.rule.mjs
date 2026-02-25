import { createFolderStructure, projectStructureParser, projectStructurePlugin } from 'eslint-plugin-project-structure'

export const foldersRule = {
  files: ['**'],
  plugins: { 'project-structure': projectStructurePlugin },
  ignores: ['projectStructure.cache.json'],
  languageOptions: { parser: projectStructureParser },
  rules: {
    'project-structure/folder-structure': [
      'error',
      createFolderStructure({
        structure: [{ name: '*' }, { ruleId: 'folderRule' }],
        rules: {
          scopeRule: {
            name: 'shared|application|infrastructure|features',
            folderRecursionLimit: 6,
            children: [{ name: 'index.ts|index.tsx' }, { ruleId: 'scopeFolderRule' }],
          },
          scopeFolderRule: {
            name: '*',
            folderRecursionLimit: 5,
            children: [{ ruleId: 'defsRule' }, { name: '*' }, { ruleId: 'scopeFolderRule' }],
          },
          defsRule: {
            name: 'defs',
            folderRecursionLimit: 2,
            enforceExistence: 'index.ts',
            children: [
              { name: 'index.ts' },
              {
                name: 'interfaces',
                enforceExistence: 'index.ts',
                children: [{ name: 'index.ts|index.tsx' }, { name: '{kebab-case}.interface.ts' }],
              },
              {
                name: 'enums',
                enforceExistence: 'index.ts',
                children: [{ name: 'index.ts|index.tsx' }, { name: '{kebab-case}.enum.ts' }],
              },
              {
                name: 'types',
                enforceExistence: 'index.ts',
                children: [{ name: 'index.ts|index.tsx' }, { name: '{kebab-case}.type.ts' }],
              },
              {
                name: 'models',
                enforceExistence: 'index.ts',
                children: [{ name: 'index.ts|index.tsx' }, { name: '{kebab-case}.model.ts' }],
              },
              {
                name: 'dto',
                enforceExistence: 'index.ts',
                children: [{ name: 'index.ts|index.tsx' }, { name: '{kebab-case}.dto.ts' }],
              },
              {
                name: 'consts',
                enforceExistence: 'index.ts',
                children: [
                  { name: 'index.ts|index.tsx' },
                  { name: '{kebab-case}.consts.ts' },
                  { name: '{kebab-case}.const.ts' },
                ],
              },
            ],
          },
          srcRule: {
            name: 'src',
            folderRecursionLimit: 6,
            children: [{ name: '*.ts' }, { name: '*.tsx' }, { ruleId: 'scopeRule' }, { name: '*', children: [] }],
          },
          folderRule: {
            folderRecursionLimit: 10,
            name: '*',
            children: [{ ruleId: 'srcRule' }, { name: '*' }, { ruleId: 'folderRule' }],
          },
        },
      }),
    ],
  },
}
