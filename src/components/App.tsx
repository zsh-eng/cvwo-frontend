import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Center,
  VStack
} from '@chakra-ui/react'
import wave from '../assets/wave-haikei.svg'
import engineer from '../assets/engineer.svg'
import Header from './Header'

function App() {
  return (
    <Box maxW="full" h="100vh" bg="blue.100" bgImage={wave} bgSize="cover">
      <Header />
      <Center h="full">
        <Flex justify="center">
          <Box maxW="md">
            <Heading fontSize="6xl">
              Singapore&#39;s{' '}
              <Text w="min-content" color="blue.700">
                largest
              </Text>{' '}
              network for university students
            </Heading>
          </Box>
          <Image src={engineer} w="2xl" />
        </Flex>
      </Center>
    </Box>
  )
}

export default App
