import React from 'react'
import { Card, CardHeader, CardBody, CardFooter , Image , Stack , Heading , Text ,Divider,ButtonGroup,Button, Flex } from '@chakra-ui/react'
export default function NotesCard({img , title , about}) {
  return (
    <Card maxW='sm' >
  <CardBody>
    <Image
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize="3xl" textAlign="center">{title}</Heading>
      <Flex border="2px solid red" h="5rem">
        {about}
      </Flex>
      
    </Stack>
  </CardBody>

  
</Card>
 
  )
}
