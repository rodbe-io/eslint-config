import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import json from '@eslint/json';
import prettier from 'eslint-plugin-prettier/recommended';
// TODO: check type error
// import packageJson from 'eslint-plugin-package-json/configs/recommended';

// eslint-disable-next-line no-restricted-exports
export default defineConfig([
  { ignores: ['**/dist/', '**/docs/', '**/coverage/', '**/*.d.ts', 'node_modules'] },
  {
    files: ['**/*.json'],
    ignores: ['**/package-lock.json', '**/package.json'],
    language: 'json/json',
    ...json.configs.recommended,
    rules: {
      ...json.configs.recommended.rules,
      'json/sort-keys': 'error',
    },
  },
  {
    files: ['**/*.jsonc'],
    language: 'json/jsonc',
    ...json.configs.recommended,
    rules: {
      ...json.configs.recommended.rules,
      'json/sort-keys': 'error',
    },
  },
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    ...json.configs.recommended,
    rules: {
      ...json.configs.recommended.rules,
      'json/sort-keys': 'error',
    },
  },
  {
    extends: [js.configs.recommended],
    files: ['**/*.js'],
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
  },
  // packageJson,
  prettier,
]);
