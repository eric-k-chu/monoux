import { resolve } from 'node:path'

const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  parserOptions: {
    project,
  },
  rules: {
    semi: 'off',
    'import/order': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
