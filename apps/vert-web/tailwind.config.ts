import { config as twConfig } from '@monoux/components/config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/**/*.tsx'],
  presets: [twConfig],
}

export default config
