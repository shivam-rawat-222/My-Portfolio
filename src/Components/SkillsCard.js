import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function SkillsCard({ logo, name }) {
    return (
        <Flex borderRadius="20px" w="10rem" h="10rem" justifyContent="center" alignItems="center" flexDir="column" _hover={{ boxShadow: "0px 10px 50px cyan", transition: "0.3s" }}>

            <Image h="100px" w="100px" src={logo} />
            <Text>{name}</Text>


        </Flex>

    )
}
