import { Text } from 'ink'
import React from 'react'

type Props = {
  name: string
}

export default function App({ name }: Props): React.ReactElement {
  return (
    <Text>
      Hello, <Text color='green'>{name}</Text>
    </Text>
  )
}
