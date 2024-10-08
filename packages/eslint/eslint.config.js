import eslint from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint/eslint-plugin': tsPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    ignores: ['**/*.config.(js|ts|cjs|mjs)', '**/*.d.ts', '**/node_modules/**','**/dist/**', '**/build/**',],
  }
]
