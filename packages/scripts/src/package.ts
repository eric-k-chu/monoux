import * as enquirer from 'enquirer'
import { createDir, validateDuplicate } from './file'
import { run } from './run'

type PromptResponse = {
  type: 'ui' | 'lib'
  name: string
}

async function addPackage(): Promise<void> {
  const response = await enquirer.prompt<PromptResponse>([
    {
      type: 'select',
      name: 'type',
      message: 'What type of package is it?',
      choices: ['ui', 'lib'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should the package be called?',
      validate: (name) => validateDuplicate('packages', name),
    },
  ])

  await createDir('packages', response.name)
}

run(addPackage)
