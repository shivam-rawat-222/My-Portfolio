import React from 'react'
import { Card, Image, Box, VStack, Heading, Text, Flex } from "@chakra-ui/react"
import "./Styles/project.css"

export default function ProjectsCard({ img }) {
    return (
        <Card


            width={{ base: "200px", md: "100%", lg: "250px" }}
            height={{ base: "200px", md: "350px", lg: "280px" }}
            boxShadow="dark-lg"
            className='card'
            overflow="hidden"
            borderRadius="20px"
            mt={{ base: "0px", md: "70px", lg: "0px" }}
       
        >
            <Image
                src={img}
                boxSize="10px"

                height={{ base: "290px", md: "480px", lg: "300px" }}
                width={{ lg: "300px" }}
                borderRadius="2px"

                alt="card"
            />
            <Box
                className='cardglass'
                bgColor="black"
                opacity="0.8"
                width="full"
                height={{ base: "300px", md: "400px", lg: "400px" }}
                pos="absolute"
                transition="1s"
                top={{ base: "70%", md: "80%", lg: "70%" }}

            >
                <Flex flexDir="column" h="full" >
                    <Flex w="full"  h="20%" justifyContent="center" alignItems="center"><Text>Real Chat App</Text></Flex>
                    <Flex  >
                        <Text p="10px" textAlign="center" fontSize={{base:"10px",md:"md",lg:"sm"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare sapien ac sem auctor venenatis. Phasellus aliquet ac eni
                            m eget mollis. Ut congue urna lacus  </Text>
                    </Flex>
                </Flex>

            </Box>
        </Card>




    )
}
