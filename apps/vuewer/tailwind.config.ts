// tailwind config is required for editor support

import sharedConfig from '@monoux/tailwind-config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [sharedConfig],
}

export default config
