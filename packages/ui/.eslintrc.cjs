/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@monoux/eslint-config/react.js'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-cycle': 'off',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
}
