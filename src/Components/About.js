import React from 'react'
import { Flex, Text, Image, HStack } from '@chakra-ui/react'
export default function About() {
    return (
        <Flex mb="15rem" id="about" h="100vh" alignItems="center">
            <Flex w="100%" justifyContent="center"  >
                <Image src='./Images/about.png' paddingTop="10px" h="30rem"></Image>
            </Flex>
            <Flex flexDir="column" w="100%" >
                <Flex><Text fontSize="70px" fontFamily="Inter" fontWeight="bold" ml={10}>Who am <Text display="inline" color="#137DC6" fontWeight="bold">I </Text><Text display="inline" fontWeight="bold">?</Text></Text></Flex>

                <Flex px="20px" fontSize="16px" w="90%">
                    <Text>
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri

                    </Text>
                </Flex>

                <HStack spacing={0}>
                    <Image h="70%" src='./Images/i.png' paddingTop="10px"></Image>
                    <Image h="70%" src='./Images/l.png' paddingTop="10px"></Image>
                    <Image h="70%" src='./Images/f.png' paddingTop="10px"></Image>
                    <Image h="70%" src='./Images/b.png' paddingTop="10px"></Image>
                    <Image h="70%" src='./Images/g.png' paddingTop="10px"></Image>
                </HStack>
            </Flex>

        </Flex>

    )
}
