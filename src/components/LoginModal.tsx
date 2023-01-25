import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useBoolean
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  loginDetails: {
    username: string
    password: string
    repeatPassword: string
  }
}

interface PasswordInputProps {
  visible: boolean
  toggle: () => void
  placeholder: string
}

function PasswordInput({ visible, toggle, placeholder }: PasswordInputProps) {
  return (
    <InputGroup>
      <Input placeholder={placeholder} type={visible ? 'text' : 'password'} />
      <InputRightElement>
        <Button variant="ghost" onClick={toggle} mr={6}>
          {visible ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default function LoginModal({
  isOpen,
  onClose,
  onChange,
  loginDetails
}: LoginModalProps) {
  const [show, setShow] = useBoolean()
  const { username, password, repeatPassword } = loginDetails

  const UsernameInput = (
    <Input
      placeholder="Username"
      onChange={onChange}
      name="username"
      value={username}
      mb={2}
    />
  )
  const PasswordInput = (
    <InputGroup>
      <Input
        name="password"
        placeholder="Password"
        type={show ? 'text' : 'password'}
        onChange={onChange}
        value={password}
        mb={2}
      />
      <InputRightElement>
        <Button variant="ghost" onClick={setShow.toggle} mr={6} px={4}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
  const RepeatPasswordInput = (
    <Input
      name="repeatPassword"
      placeholder="Re-enter your password"
      type={show ? 'text' : 'password'}
      onChange={onChange}
      value={repeatPassword}
    />
  )

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs colorScheme="blue" align="center" size="lg">
              <TabList>
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {UsernameInput}
                  {PasswordInput}
                </TabPanel>
                <TabPanel>
                  {UsernameInput}
                  {PasswordInput}
                  {RepeatPasswordInput}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
