import { Box, Text } from 'ink'
import TextInput from 'ink-text-input'
import React from 'react'

type Props = {
  name?: string
}

export default function App({ name }: Props): React.ReactElement {
  const [appName, setAppName] = React.useState(name || '')

  return (
    <Box>
      <Box marginRight={1}>
        <Text>Enter your query:</Text>
      </Box>
      <TextInput value={appName} onChange={setAppName} placeholder={name} />
    </Box>
  )
}
