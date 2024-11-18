import pkgJson from '../assets/package.pkg.json'
import { getDirname, getPackageName, getWorkspaceDependencies } from './prompt'
import { addPackageJson, addSrc, addTsconfig } from './util'

const baseJson = pkgJson as Record<string, unknown>

const dirname = await getDirname()

const name = await getPackageName({ message: 'Package Name:' })

const dependencies = await getWorkspaceDependencies()

const json = { name, ...baseJson, dependencies }

const path = `./packages/${dirname}`

await Promise.all([addPackageJson(path, json), addTsconfig(path), addSrc(path)])

console.log(`\nPackage created at ${path.slice(2)}`)
console.log(`Run 'bun install' to install dependencies`)
