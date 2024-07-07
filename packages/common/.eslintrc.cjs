/** @type {import("eslint").Linter.Config} */
        module.exports = {
          root: true,
          parser: '@typescript-eslint/parser',
          extends: ['@monoux/eslint-config/library.js'],
          rules: {
            'import/no-cycle': 'off',
          },
          env: {
            browser: true,
            es6: true,
            node: true,
          },
        }