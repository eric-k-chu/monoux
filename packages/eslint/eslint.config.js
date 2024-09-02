import eslint from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['*.js?(x)', '*.ts?(x)'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
    languageOptions: {
      parser: tsParser,
    },
    ignores: ['**/*.config.(js|ts|cjs|mjs)'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
]
