import React from 'react'
import { createRoot } from 'react-dom/client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: `'Ubuntu', sans-serif`,
  body: `'Prompt', sans-serif`
}

const theme = extendTheme({ ...fonts })

import App from 'components/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
