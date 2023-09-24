import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function SkillsCard({ logo, name }) {
    return (
        <Flex borderRadius="20px" w={{ base: "5rem", md: "10rem", lg: "10rem" }} h={{ base: "5rem", md: "10rem", lg: "10rem" }} justifyContent="center" alignItems="center" flexDir="column" _hover={{ boxShadow: "0px 10px 50px cyan", transition: "0.3s" }}>

            <Image boxSize={{ base: "4rem", md: "6rem", lg: "7rem" }} src={logo} />
            <Text>{name}</Text>


        </Flex>

    )
}
