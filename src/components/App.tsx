import { useImmer } from 'use-immer'
import { Box, useDisclosure } from '@chakra-ui/react'
import Header from './Header'
import LandingPage from './LandingPage'
import LoginModal from './LoginModal'

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
    <Box maxW="full" h="100vh" bg="blue.100">
      <Header login={onOpen} />
      <LandingPage />
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
