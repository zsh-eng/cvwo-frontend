import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Image,
  Heading,
  Flex,
  Avatar,
  Box,
  Tag,
  TagLeftIcon,
  TagLabel
} from '@chakra-ui/react'
import { formatDistanceToNow } from 'date-fns'

interface ForumPostContent {
  title: string
  body: string
  author: string
  date: Date
  tags: string[]
}

export default function ForumPost({ content }: { content: ForumPostContent }) {
  const { title, body, author, date, tags } = content

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      size="md"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading mb={4} size="md">
            {title}
          </Heading>
          <Text noOfLines={3} color="gray">
            {body}
          </Text>
        </CardBody>
        <CardFooter>
          <Flex w="full">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Box>
                <Heading size="sm">{author}</Heading>
                <Text fontSize="sm" color="gray">
                  {formatDistanceToNow(date) + ' ago'}
                </Text>
              </Box>
            </Flex>
            <Flex justifySelf="flex-end" gap={4}>
              {tags.map((tag) => (
                <Tag size="lg" key={tag} variant="solid" colorScheme="teal">
                  {/* <TagLeftIcon /> */}
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            </Flex>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  )
}
