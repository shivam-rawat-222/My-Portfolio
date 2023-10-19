import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Flex, Text, Image, HStack } from '@chakra-ui/react'
export default function About() {

    const { colorMode } = useColorMode()
    return (
        <Flex id="about" alignItems="center"  flexDir={{ base: 'column', md: 'column', lg: "row" }} h="100%" >
            <Flex w="50%" justifyContent="center"  >
                <Image src='./Images/about.png' paddingTop="10px" ></Image>
            </Flex>
            <Flex flexDir="column" w="100%">
                <Flex justifyContent="center" ><Text fontSize={{ base: '50px', md: '60px', lg: "70px" }} fontFamily="Inter" fontWeight="bold" ml={10}>Who am <Text display="inline" color="#137DC6" fontWeight="bold">I </Text><Text display="inline" fontWeight="bold">?</Text></Text></Flex>

                <Flex fontSize="16px" w="full" justifyContent=" center" >
                    <Text fontSize={{ base: 'sm', md: 'sm', lg: "none" }} p="40px" textAlign="center" >
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri

                    </Text>
                </Flex>

                <HStack spacing={{ base: '5', md: '10', lg: "10" }} w="100%" display="flex" justifyContent="center" mb="20px">
                    <Image src='./Images/media/insta.png' boxSize="2rem"></Image>
                    <Image src='./Images/media/git.png' boxSize="2rem" ></Image>
                    <Image src='./Images/media/linkedin.png' boxSize="2rem" ></Image>
                    <Image src='./Images/media/g.png' boxSize="2rem" ></Image>
                    <Image src='./Images/media/x.png' boxSize="2rem" ></Image>
                    <Image src='./Images/media/fb.png' boxSize="2rem" ></Image>





                </HStack>
            </Flex>

        </Flex >

    )
}
