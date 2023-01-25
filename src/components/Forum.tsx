import {
  Button,
  Container,
  VStack,
  HStack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Tag,
  TagLeftIcon,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Input,
  useDisclosure,
  FormControl,
  FormErrorMessage,
  useToast
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
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

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

interface PostValues {
  title: string
  body: string
}

// Sidebar for sorting forum posts
function Sidebar() {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const validationSchema = yup.object({
    title: yup
      .string()
      .max(100, 'Title can be a maximum of 100 characters')
      .required('Title is required'),
    body: yup.string().required('Body is required')
  })

  const formik = useFormik({
    initialValues: {
      title: '',
      body: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values: PostValues) => {
      try {
        await axios({
          method: 'post',
          url: '/api/posts',
          data: { ...values, owner: 'Zhi Sheng' }
        })
        toast({
          title: 'Post created',
          description: 'You have succesfully submitted your post.',
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true
        })
      } catch (err) {
        toast({
          title: 'Failed to create post',
          description:
            'We encountered the following error trying to make your post: ' +
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

  return (
    <VStack w="100%" alignSelf="start" align="stretch">
      <>
        <Button
          size="lg"
          py={8}
          colorScheme="blue"
          variant="outline"
          onClick={onOpen}
        >
          Create a new post
        </Button>

        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a new post</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={formik.handleSubmit}>
              <ModalBody>
                <FormControl
                  isInvalid={
                    formik.touched.title && Boolean(formik.errors.title)
                  }
                >
                  <Input
                    fontWeight="bold"
                    size="lg"
                    id="title"
                    name="title"
                    placeholder="Title of My Post"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>
                    {formik.touched.title && formik.errors.title}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.body && Boolean(formik.errors.body)}
                >
                  <Textarea
                    id="body"
                    name="body"
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    placeholder="Write whatever you want here..."
                    rows={10}
                    mt={4}
                  />
                  <FormErrorMessage>
                    {formik.touched.body && formik.errors.body}
                  </FormErrorMessage>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Post
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>

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
    <Container maxW="100%" mt={4} px={16}>
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
