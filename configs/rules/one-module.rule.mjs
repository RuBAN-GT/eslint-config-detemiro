export const oneModuleRule = {
  files: ['**/*.{ts,tsx}'],
  rules: {
    'max-classes-per-file': ['error', 1],
    'no-restricted-syntax': [
      'error',
      {
        selector: `
          Program >
          :matches(
            ClassDeclaration,
            TSInterfaceDeclaration,
            TSEnumDeclaration,
            TSTypeAliasDeclaration,
            ExportNamedDeclaration:has(> :matches(
              ClassDeclaration,
              TSInterfaceDeclaration,
              TSEnumDeclaration,
              TSTypeAliasDeclaration
            )),
            ExportDefaultDeclaration:has(> :matches(
              ClassDeclaration,
              TSInterfaceDeclaration,
              TSEnumDeclaration,
              TSTypeAliasDeclaration
            ))
          )
          ~
          :matches(
            ClassDeclaration,
            TSInterfaceDeclaration,
            TSEnumDeclaration,
            TSTypeAliasDeclaration,
            ExportNamedDeclaration:has(> :matches(
              ClassDeclaration,
              TSInterfaceDeclaration,
              TSEnumDeclaration,
              TSTypeAliasDeclaration
            )),
            ExportDefaultDeclaration:has(> :matches(
              ClassDeclaration,
              TSInterfaceDeclaration,
              TSEnumDeclaration,
              TSTypeAliasDeclaration
            ))
          )
        `.replace(/\s+/g, ' '),
        message: 'One file - one Class/Interface/Type/Enum. Move additional declarations to a separate file.',
      },
    ],
  },
}
