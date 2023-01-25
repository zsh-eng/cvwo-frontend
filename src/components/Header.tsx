import { MouseEventHandler } from 'react'
import { Button, Image, HStack, Box, Spacer } from '@chakra-ui/react'
import logo from '../assets/logo.png'

interface LinkProps {
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

function navigate() {
  return 'hello'
}

function Link({ children, onClick }: LinkProps) {
  return (
    <Button onClick={onClick} colorScheme="facebook">
      {children}
    </Button>
  )
}

interface HeaderProps {
  login: () => void
  loggedIn: boolean
}

export default function Header({ login, loggedIn }: HeaderProps) {
  return (
    <HStack px={12} py={4} bg="cyan" spacing={8}>
      <Image src={logo} h={12} mr={4} />
      <Button onClick={navigate} variant="link">
        Home
      </Button>
      <Button onClick={navigate} variant="link">
        About
      </Button>
      <Spacer />
      {loggedIn && (
        <Button colorScheme="facebook" onClick={login}>
          Login
        </Button>
      )}
    </HStack>
  )
}
