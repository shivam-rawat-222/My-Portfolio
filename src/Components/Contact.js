import React from 'react'
import ContacForm from './ContacForm'
import { Flex, Heading, Image } from '@chakra-ui/react'
export default function Contact() {
    return (
        <Flex  justifyContent="center" alignItems="center">
            <Flex border="1px solid cyan" borderRadius="50px" flexDir={{ base: 'column', md: "row", lg: "row" }} w={{ base: 'full', md: "80rem", lg: "80rem" }} h={{ base: '60rem', md: "30rem", lg: "40rem" }} justifyContent="space-evenly" >
                <Flex justifyContent="center" alignItems="center" >
                    <Flex overflow="hidden" justifyContent="center" alignItems="center" borderRadius="50px">
                        <Image boxSize={{ base: '15rem', md: "10rem", lg: "md" }} src="./Images/contactform.jpg" />

                    </Flex>

                </Flex>
                <Flex justifyContent="center" alignItems="center" flexDir="column" gap="20px">
                    <Flex >
                        <Heading>Contact Me</Heading>
                    </Flex>
                    <ContacForm />

                </Flex>

            </Flex>


        </Flex >

    )
}
