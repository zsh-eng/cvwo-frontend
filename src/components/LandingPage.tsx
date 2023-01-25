import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Center,
  Container
} from '@chakra-ui/react'
import wave from '../assets/wave-haikei.svg'
import engineer from '../assets/engineer.svg'

export default function LandingPage() {
  return (
    <Container maxW="full" h="80%" p={0}>
      <Center h="full">
        <Flex justify="center">
          <Box maxW="md">
            <Heading fontSize="6xl">
              Singapore&#39;s{' '}
              <Text w="min-content" color="blue.700">
                <em>Largest</em>
              </Text>{' '}
              network for university students
            </Heading>
          </Box>
          <Image src={engineer} w="2xl" />
        </Flex>
      </Center>
      <Image
        src={wave}
        position="fixed"
        bottom="0"
        width="full"
        pointerEvents="none"
      />
    </Container>
  )
}
