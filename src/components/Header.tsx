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
}

export default function Header({ login }: HeaderProps) {
  return (
    <HStack px={12} pt={4}>
      <Image src={logo} h={12} mr={4} />
      <Link onClick={navigate}>Home</Link>
      <Link onClick={navigate}>About</Link>
      <Spacer />
      <Link onClick={login}>Login</Link>
    </HStack>
  )
}
