import { useImmer } from 'use-immer'
import { Box, useDisclosure, useBoolean } from '@chakra-ui/react'

import Header from './Header'
import LandingPage from './LandingPage'
import LoginModal from './LoginModal'
import Forum from './Forum'

interface LoginDetails {
  username: string
  password: string
  repeatPassword: string
}

function App() {
  // For controlling the login modal screen in Header
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loginDetails, setLoginDetails] = useImmer<LoginDetails>({
    username: '',
    password: '',
    repeatPassword: ''
  })

  // Display landing page if not logged in.
  // Display forum posts if logged in
  const [loggedIn, setLoggedIn] = useBoolean(true)

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails((draft) => {
      if (draft !== undefined) {
        switch (e.target.name) {
          case 'username':
            draft.username = e.target.value
            break
          case 'password':
            draft.password = e.target.value
            break
          case 'repeatPassword':
            draft.repeatPassword = e.target.value
            break
          default:
        }
      }
    })
  }

  return (
    <Box maxW="full" h="full" pb={8}>
      <Header login={onOpen} />
      {loggedIn ? <Forum /> : <LandingPage />}
      <LoginModal
        onClose={onClose}
        isOpen={isOpen}
        onChange={handleLoginChange}
        loginDetails={loginDetails}
      />
    </Box>
  )
}

export default App
