import { capitalize } from '@monoux/common'
import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { oraPromise } from 'ora'

type Packages = 'apps' | 'packages'

/** Returns false if validation fails. Used in enquirer/prompt */
export function validateDuplicate(type: Packages, name: string): boolean {
  return !existsSync(`../../${type}/${name}`)
}

export async function createDir(type: Packages, name: string): Promise<void> {
  const path = `../../${type}/${name}`

  process.stdout.write('\n')

  await observe({
    name: `${name} ${type}`,
    fn: mkdir(path),
  })

  await observe({
    name: 'package.json',
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
    name: 'tsconfig.json',
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
    name: '.eslintrc.cjs',
    fn: writeFile(
      `${path}/.eslintrc.cjs`,
      `/** @type {import("eslint").Linter.Config} */\n module.exports = ${toJsonString({
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
      })}`
    ),
  })

  await observe({
    name: 'src',
    fn: mkdir(`${path}/src`),
  })

  console.log(`> ${type}/${name} created`)
  console.log('> Run pnpm install')
}

type ObserveInput<T> = {
  name: string
  fn: Promise<T>
}

async function observe<T>({ name, fn }: ObserveInput<T>): Promise<T> {
  const successText = `${capitalize(name)} created.`
  const failText = `Failed to create ${name}.`
  const text = `Creating ${name}...`
  return oraPromise(fn, { successText, failText, text })
}

function toJsonString(obj: Record<string, unknown>): string {
  return JSON.stringify(obj, null, 2)
}
