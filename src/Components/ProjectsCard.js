import React from 'react'
import { Card, Image, Box, VStack, Heading, Text, Flex } from "@chakra-ui/react"
import "./Styles/project.css"

export default function ProjectsCard({ img }) {
    return (
        <Card

            width={{ base: "100%", md: "100%", lg: "250px" }}
            height={{ base: "unset", md: "350px", lg: "280px" }}
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
                height={{ base: "350px", md: "100%", lg: "400px" }}
                pos="absolute"
                transition="1s"
                top={{ base: "80%", md: "60%", lg: "70%" }}

            >

            </Box>
        </Card>




    )
}
