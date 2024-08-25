#!/usr/bin/env node
import { render } from 'ink'
import meow from 'meow'
import React from 'react'
import App from './app.js'

const cli = meow(
  `
	Usage
	  $ ink

	Options
		--name  Your name

	Examples
	  $ ink --name=Jane
	  Hello, Jane
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
        default: 'default lol',
      },
      num: {
        type: 'number',
      },
    },
  }
)

render(<App name={cli.flags.name} />)
