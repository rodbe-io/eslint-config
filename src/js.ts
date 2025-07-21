export const jsRules = {
  rules: {
    curly: 'error',
    'max-params': ['error', 2],
    'newline-after-var': 'error',
    'newline-before-return': 'error',
    'no-duplicate-imports': 'error',
    'no-restricted-exports': [
      'error',
      {
        restrictDefaultExports: {
          direct: true,
        },
      },
    ],
    'no-unused-vars': 'off',
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
        minKeys: 2,
        natural: false,
      },
    ],
    'spaced-comment': 'error',
  },
};
