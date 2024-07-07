import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'

type Packages = 'apps' | 'packages'

/** Returns false if validation fails. Used in enquirer/prompt */
export function validateDuplicate(type: Packages, name: string): boolean {
  return !existsSync(`../../${type}/${name}`)
}

export async function createDir(type: Packages, name: string): Promise<void> {
  const path = `../../${type}/${name}`

  await observe({
    onStart: `Creating directory...`,
    onEnd: `Directory created.`,
    fn: mkdir(path),
  })

  await observe({
    onStart: `Creating package.json...`,
    onEnd: `package.json created.`,
    fn: writeFile(
      `${path}/package.json`,
      toJsonString({
        name: `@monoux/${name}`,
        private: true,
        scripts: {
          lint: 'eslint src/',
          test: 'vitest run',
          'test:watch': 'vitest --watch',
          'type-check': 'tsc --noEmit',
        },
        devDependencies: {
          '@monoux/eslint-config': 'workspace:*',
          '@monoux/typescript-config': 'workspace:*',
          typescript: '^5.5.3',
          vitest: '1.6.0',
        },
      })
    ),
  })

  await observe({
    onStart: `Creating tsconfig.json...`,
    onEnd: `tsconfig.json created.`,
    fn: writeFile(
      `${path}/tsconfig.json`,
      toJsonString({
        extends: '@monoux/typescript-config/base.json',
        include: ['src', '.eslintrc.cjs'],
        compilerOptions: {
          allowImportingTsExtensions: false,
          moduleResolution: 'node',
          declaration: true,
          declarationMap: true,
          composite: true,
          noEmit: false,
          rootDir: './src',
        },
        exclude: ['dist', 'build', 'node_modules'],
      })
    ),
  })

  await observe({
    onStart: `Creating .eslintrc.cjs...`,
    onEnd: `.eslintrc.cjs created.`,
    fn: writeFile(
      `${path}/.eslintrc.cjs`,
      `/** @type {import("eslint").Linter.Config} */
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
        }`
    ),
  })

  await observe({
    onStart: `Creating src directory...`,
    onEnd: `src directory created.`,
    fn: mkdir(`${path}/src`),
  })

  console.log(`> ${type}/${name} created`)
  console.log('> Run pnpm install')
}

type ObserveInput<T> = {
  onStart: string
  onEnd: string
  fn: Promise<T>
}

async function observe<T>({ onStart, onEnd, fn }: ObserveInput<T>): Promise<T> {
  console.log(`> ${onStart}`)
  const res = await fn
  console.log(`> ${onEnd}`)
  return res
}

function toJsonString(obj: Record<string, unknown>): string {
  return JSON.stringify(obj, null, 2)
}
