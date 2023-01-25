import { Box, useDisclosure, useBoolean } from '@chakra-ui/react'

import Header from './Header'
import LandingPage from './LandingPage'
import LoginModal from './LoginModal'
import Forum from './Forum'

function App() {
  // For controlling the login modal screen in Header
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Displays Homepage
  // NOTE: Add React Router if time permits
  const [isHome, setIsHome] = useBoolean(true)

  return (
    <Box maxW="full" h="full" pb={8}>
      <Header
        login={onOpen}
        navigateHome={setIsHome.on}
        navigatePosts={setIsHome.off}
      />
      {!isHome ? <Forum /> : <LandingPage />}
      <LoginModal onClose={onClose} isOpen={isOpen} />
    </Box>
  )
}

export default App
