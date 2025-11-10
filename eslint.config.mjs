import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  tseslint.configs.recommended, // List of rules: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
  {
    plugins: { '@stylistic': stylistic, import: importPlugin },
    rules: {
      indent: ['error', 2],

      // eslint rules
      '@typescript-eslint/no-unused-vars': 'warn',
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-trailing-spaces': 'error',
      'semi-style': 'error',
      'import/newline-after-import': 'error',
      'sort-imports': ['error', {
        ignoreCase: true,
        ignoreDeclarationSort: true, // Let import/order handle declaration sorting
        ignoreMemberSort: false,     // Still sort named imports within each statement
      }],
      'no-restricted-imports': ['error',   {
        patterns: [
          {
            group: ['**/wailsjs/go/backend/App**'],
            message:
              'Do not import Wails API methods directly. Use `api.ts` from the service layer instead.',
          },
          {
            group: ['**/wailsjs/go/models**'],
            importNames: ['models'],
            message:
              'Do not import Wails models directly. Use `modelsExtends` from the model layer instead.',
          },
        ],
      }],

      // Stylistic rules
      '@stylistic/semi': 'error',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/block-spacing': 'error',
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true,
      }],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/key-spacing': ['error', { beforeColon: false }],
      '@stylistic/keyword-spacing': ['error', { before: true }],
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterOverload: true }],
      '@stylistic/member-delimiter-style': 'error',
      '@stylistic/no-extra-semi': 'error',

      // This rule includes options for every object type except interfaces, for which the style I
      // prefer is too variable to be defined
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: { multiline: true },
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true },
        ExportDeclaration: { multiline: true },
        TSTypeLiteral: { multiline: true },
        TSEnumBody: { multiline: true },
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/type-annotation-spacing': ['error', {
        before: false,
        after: true,
      }],
    },
    ignores: ['build/*'],
  },
);
