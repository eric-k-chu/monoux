import appJson from '../assets/package.app.json'
import { getDirname, getPackageName, getWorkspaceDependencies } from './prompt'
import { addPackageJson, addSrc, addTsconfig } from './util'

const baseJson = appJson as Record<string, unknown>

const dirname = await getDirname()

const name = await getPackageName({ message: 'App Name:' })

const dependencies = await getWorkspaceDependencies()

const json = { name, ...baseJson, dependencies }

const path = `./apps/${dirname}`

await Promise.all([addPackageJson(path, json), addTsconfig(path), addSrc(path)])

console.log(`\nApp created at ${path.slice(2)}`)
console.log(`Run 'bun install' to install dependencies`)
