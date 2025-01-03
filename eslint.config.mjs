import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default tseslint.config(
  tseslint.configs.recommended, // List of rules: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
  {
    plugins: { '@stylistic/ts': stylisticTs },
    rules: {
      indent: ['error', 2],
      '@typescript-eslint/no-unused-vars': 'warn',

      // Formatting rules that are expliticly stated because I want absolute control on how the code looks
      '@stylistic/ts/semi': 'error',
      '@stylistic/ts/space-before-blocks': 'error',
      '@stylistic/ts/block-spacing': 'error',
      '@stylistic/ts/brace-style': 'error',
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/ts/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/ts/function-call-spacing': ['error', 'never'],
      '@stylistic/ts/key-spacing': ['error', { beforeColon: false }],
      '@stylistic/ts/keyword-spacing': ['error', { before: true }],
      '@stylistic/ts/lines-between-class-members': ['error', 'always', { exceptAfterOverload: true }],
      '@stylistic/ts/member-delimiter-style': 'error',
      '@stylistic/ts/no-extra-semi': 'error',
      '@stylistic/ts/object-curly-newline': ['error',  { multiline: true }],
      '@stylistic/ts/object-curly-spacing': ['error',  'always'],
      '@stylistic/ts/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/ts/quote-props': ['error', 'as-needed'],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/space-before-function-paren': ['error', 'never'],
      '@stylistic/ts/space-infix-ops': 'error',
      '@stylistic/ts/type-annotation-spacing': ['error', { before: false, after: true }],
    },
    ignores: ['build/*'],
  },
);
