import { Button, Image, HStack, Spacer } from '@chakra-ui/react'
import logo from '../assets/logo.png'

function navigate() {
  return 'hello'
}
interface HeaderProps {
  login: () => void
  navigateHome: () => void
  navigatePosts: () => void
}

export default function Header({
  login,
  navigateHome,
  navigatePosts
}: HeaderProps) {
  return (
    <HStack px={12} py={4} bg="cyan" spacing={8}>
      <Image src={logo} h={12} mr={4} />
      <Button onClick={navigateHome} variant="link">
        Home
      </Button>
      <Button onClick={navigatePosts} variant="link">
        Posts
      </Button>
      <Spacer />
      <Button colorScheme="facebook" onClick={login}>
        Login
      </Button>
    </HStack>
  )
}
