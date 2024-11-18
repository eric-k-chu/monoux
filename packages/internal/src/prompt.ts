import { checkbox, input } from '@inquirer/prompts'
import { isEmpty } from '@monoux/core'
import { readExistingPackages } from './util'

type Arguments = {
  message?: string
  required?: boolean
}

const packages = await readExistingPackages('./packages')
const apps = await readExistingPackages('./apps')
const workspace = [...packages, ...apps]

export async function getDirname(opts?: Arguments): Promise<string> {
  const dirname = await input({
    message: opts?.message ?? 'Directory name:',
    required: opts?.required ?? true,
    validate: (value) => {
      if (isEmpty(value)) return 'Directory name is required'
      if (workspace.some((w) => w.name === value)) return 'Directory name already exists'
      return true
    },
  })
  return dirname.trim().toLowerCase()
}

export async function getWorkspaceDependencies(opts?: Arguments): Promise<Record<string, string>> {
  const deps = await checkbox({
    message: opts?.message ?? 'Workspace dependencies:',
    choices: packages,
    required: opts?.required ?? false,
  })
  return deps.reduce<Record<string, string>>((acc, dep) => {
    acc[dep] = 'workspace:*'
    return acc
  }, {})
}

export async function getPackageName(opts?: Arguments): Promise<string> {
  const name = await input({
    message: opts?.message ?? 'Package Name:',
    required: opts?.required ?? true,
    validate: (value) => {
      if (isEmpty(value)) return 'Package name is required'
      if (workspace.some((w) => w.value === value)) return 'Package name already exists'
      return true
    },
  })
  return name
}
