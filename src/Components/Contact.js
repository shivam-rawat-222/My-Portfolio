import React from 'react'
import ContacForm from './ContacForm'
import { Flex, Heading, Image } from '@chakra-ui/react'
export default function Contact() {
    return (
        <Flex h="100vh" justifyContent="center" alignItems="center" my="10rem">
            <Flex border="1px solid cyan" borderRadius="50px" flexDir={{ base: 'column', md: "row", lg: "row" }} w={{ base: 'full', md: "80rem", lg: "80rem" }} h={{ base: '60rem', md: "30rem", lg: "40rem" }} justifyContent="space-evenly" >
                <Flex justifyContent="center" alignItems="center">
                    <Flex overflow="hidden" justifyContent="center" alignItems="center">
                        <Image src="./Images/contactform.jpg" boxSize={{ base: 'xs', md: "xs", lg: "md" }} />

                    </Flex>

                </Flex>
                <Flex justifyContent="center" alignItems="center" flexDir="column">
                    <Flex >
                        <Heading>Contact Me</Heading>
                    </Flex>
                    <ContacForm />

                </Flex>

            </Flex>


        </Flex >

    )
}
