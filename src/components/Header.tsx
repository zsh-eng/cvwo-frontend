import { MouseEventHandler } from 'react'
import { Button, Image, HStack, Box } from '@chakra-ui/react'
import logo from '../assets/logo.png'

interface LinkProps {
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

function navigate() {
  return 'hello'
}

function Link({ children, onClick }: LinkProps) {
  return <Button onClick={onClick}>{children}</Button>
}

export default function Header() {
  return (
    <HStack h="100px">
      <Image src={logo} h="50px" />
      <Link onClick={navigate}>Hello</Link>
    </HStack>
  )
}
