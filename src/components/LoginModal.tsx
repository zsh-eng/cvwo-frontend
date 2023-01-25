import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
  useBoolean,
  useToast,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

interface LoginValues {
  username: string
  password: string
  confirmPassword?: string
}
interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  // Sets the state of showing password input
  const [show, setShow] = useBoolean()
  // Sets login or signup form (default: login)
  const [login, setLogin] = useBoolean(true)

  // Handles showing toast notifications when logging in
  const toast = useToast()

  // Use Formik to handle form state and input validation
  const validationSchema = yup.object({
    username: yup
      .string()
      .max(20, 'Username can be a maximum of 20 characters')
      .required('Username is required'),
    password: yup.string().required('Password is required.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values: LoginValues) => {
      try {
        await axios({
          method: 'post',
          url: '/api/login',
          data: { username: values.username, password: values.password }
        })
        toast({
          title: 'Login successful!',
          description: 'You have succesfully logged in to VENUS.',
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true
        })
      } catch (err) {
        toast({
          title: 'Login failed',
          description:
            'We encountered the following error when attempting to log in' +
            err,
          status: 'error',
          position: 'top',
          duration: 5000,
          isClosable: true
        })
        console.error(err)
      }
    }
  })

  const UsernameInput = (
    <FormControl
      isInvalid={formik.touched.username && Boolean(formik.errors.username)}
    >
      <Input
        id="username"
        name="username"
        placeholder="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        mb={2}
      />
      <FormErrorMessage>
        {formik.touched.username && formik.errors.username}
      </FormErrorMessage>
    </FormControl>
  )
  const PasswordInput = (
    <FormControl
      isInvalid={formik.touched.password && Boolean(formik.errors.password)}
    >
      <InputGroup>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type={show ? 'text' : 'password'}
          onChange={formik.handleChange}
          value={formik.values.password}
          mb={2}
        />
        <InputRightElement>
          <Button variant="ghost" onClick={setShow.toggle} mr={6} px={4}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>
        {formik.touched.password && formik.errors.password}
      </FormErrorMessage>
    </FormControl>
  )
  const ConfirmPasswordInput = (
    <Input
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Re-enter your password"
      type={show ? 'text' : 'password'}
      onChange={formik.handleChange}
      value={formik.values.confirmPassword}
    />
  )

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <HStack maxW="full" justify="center">
              <Button
                onClick={setLogin.on}
                variant={!login ? 'solid' : 'ghost'}
              >
                Login
              </Button>
              <Button
                onClick={setLogin.off}
                variant={login ? 'solid' : 'ghost'}
              >
                Sign up
              </Button>
            </HStack>
          </ModalHeader>
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              {UsernameInput}
              {PasswordInput}
              {!login && ConfirmPasswordInput}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Continue
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
