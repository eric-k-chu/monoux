import { filterEmptyPromises, isEmpty } from '@monoux/core'
import { statSync } from 'node:fs'
import { readdir } from 'node:fs/promises'

type Package = {
  name: string
  value: string
}

export async function addTsconfig(basePath: string): Promise<void> {
  const path = `${basePath}/tsconfig.json`
  const tsconfig = Bun.file('./packages/internal/assets/tsconfig.jest.json')
  await Bun.write(path, tsconfig)
}

export async function addPackageJson(
  basePath: string,
  json: Record<string, unknown>
): Promise<void> {
  const path = `${basePath}/package.json`
  await Bun.write(path, JSON.stringify(json, null, 2))
}

export async function addSrc(basePath: string): Promise<void> {
  const path = `${basePath}/src/index.ts`
  await Bun.write(path, `console.log('Hello, World!')`)
}

/** Inquirer hangs if this is called before a prompt */
export async function readExistingPackages(basePath: string): Promise<Package[]> {
  try {
    const content = await readdir(basePath)
    return filterEmptyPromises(content.map((c) => readPackage(basePath, c)))
  } catch (error) {
    return []
  }
}

const EXCLUDES = ['internal']

async function readPackage(base: string, name: string): Promise<Package | undefined> {
  try {
    if (EXCLUDES.includes(name)) return
    const path = `${base}/${name}`
    if (isDir(path)) {
      const pkg = await readPackageJson(`${path}/`)
      if (isEmpty(pkg?.name)) return
      if (typeof pkg.name !== 'string') return
      return { name, value: pkg.name }
    }
  } catch (error) {
    // TODO: logging with levels
    return
  }
}

function isDir(path: string): boolean {
  return statSync(path).isDirectory()
}

async function readPackageJson(path: `${string}/`): Promise<Record<string, unknown>> {
  return Bun.file(`${path}package.json`).json()
}
