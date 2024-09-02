import tsPlugin from '@typescript-eslint/eslint-plugin'

export default [
  {
    files: ['*.js?(x)', '*.ts?(x)'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
    ignores: ['*tailwind.config.*'],
  },
]
