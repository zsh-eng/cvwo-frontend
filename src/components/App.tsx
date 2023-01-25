import { Box, useDisclosure, useBoolean } from '@chakra-ui/react'

import Header from './Header'
import LandingPage from './LandingPage'
import LoginModal from './LoginModal'
import Forum from './Forum'

function App() {
  // For controlling the login modal screen in Header
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Display landing page if not logged in.
  // Display forum posts if logged in
  const [loggedIn, setLoggedIn] = useBoolean(true)

  return (
    <Box maxW="full" h="full" pb={8}>
      <Header login={onOpen} loggedIn={loggedIn} />
      {loggedIn ? <Forum /> : <LandingPage />}
      <LoginModal onClose={onClose} isOpen={isOpen} />
    </Box>
  )
}

export default App
