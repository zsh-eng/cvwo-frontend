import {
  Container,
  VStack,
  HStack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Tag,
  TagLeftIcon,
  TagLabel
} from '@chakra-ui/react'
import ForumPost from './ForumPost'
import {
  FaCalendarAlt,
  FaFire,
  FaSchool,
  FaQuestion,
  FaComments,
  FaBook
} from 'react-icons/fa'

const testPost = {
  title: 'Should I take GEA1000N or DSA1101?',
  body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus.
    Quae qui ad dolore assumenda praesentium reprehenderit porro hic ab,
    cupiditate sequi similique eius reiciendis quasi aliquam et, earum
    laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus.
    Quae qui ad dolore assumenda praesentium reprehenderit porro hic ab,
    cupiditate sequi similique eius reiciendis quasi aliquam et, earum
    laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus.
    Quae qui ad dolore assumenda praesentium reprehenderit porro hic ab,
    cupiditate sequi similique eius reiciendis quasi aliquam et, earum
    laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus.
    Quae qui ad dolore assumenda praesentium reprehenderit porro hic ab,
    cupiditate sequi similique eius reiciendis quasi aliquam et, earum
    laboriosam!`,
  author: 'John Smith',
  date: new Date(),
  tags: ['Modules', 'School', 'Question']
}

// Sidebar for sorting forum posts
function Sidebar() {
  return (
    <VStack w="100%" alignSelf="start">
      <Card w="100%">
        <CardHeader>
          <Heading size="md">Sort</Heading>
        </CardHeader>
        <CardBody pt={0}>
          <VStack alignItems="start">
            <Tag size="lg" variant="solid" colorScheme="teal">
              <TagLeftIcon as={FaCalendarAlt} />
              <TagLabel>Newest</TagLabel>
            </Tag>
            <Tag size="lg" variant="solid" colorScheme="orange">
              <TagLeftIcon as={FaFire} />
              <TagLabel>Popularity</TagLabel>
            </Tag>
          </VStack>
        </CardBody>
      </Card>
      <Card w="100%">
        <CardHeader>
          <Heading size="md">Filter</Heading>
        </CardHeader>
        <CardBody pt={0}>
          <VStack alignItems="start">
            <Tag size="lg" variant="solid" colorScheme="teal">
              <TagLeftIcon as={FaSchool} />
              <TagLabel>School</TagLabel>
            </Tag>
            <Tag size="lg" variant="solid" colorScheme="blue">
              <TagLeftIcon as={FaBook} />
              <TagLabel>Modules</TagLabel>
            </Tag>

            <Tag size="lg" variant="solid" colorScheme="orange">
              <TagLeftIcon as={FaQuestion} />
              <TagLabel>Questions</TagLabel>
            </Tag>

            <Tag size="lg" variant="solid" colorScheme="red">
              <TagLeftIcon as={FaFire} />
              <TagLabel>CCA</TagLabel>
            </Tag>

            <Tag size="lg" variant="solid" colorScheme="purple">
              <TagLeftIcon as={FaComments} />
              <TagLabel>Off-topic</TagLabel>
            </Tag>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  )
}

export default function Forum() {
  return (
    <Container maxW="100%" mt={4} px={8}>
      <HStack>
        <Sidebar />
        <VStack flexGrow={1}>
          <ForumPost content={testPost} />
          <ForumPost content={testPost} />
          <ForumPost content={testPost} />
          <ForumPost content={testPost} />
        </VStack>
      </HStack>
    </Container>
  )
}
