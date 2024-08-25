import Enquirer from 'enquirer'
import { validateDuplicate } from './file'
import { run } from './run'
const { prompt } = Enquirer

type PromptResponse = {
  type: 'frontend' | 'backend'
  name: string
}

async function addApp(): Promise<void> {
  const response = await prompt<PromptResponse>([
    {
      type: 'select',
      name: 'type',
      message: 'What type of app is it?',
      choices: ['frontend', 'backend'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should the app be called?',
      validate: (name) => validateDuplicate('apps', name),
    },
  ])
}

run(addApp)
