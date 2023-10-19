import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'
import ProjectsCard from './ProjectsCard'
export default function Projects() {
    return (
        <Flex h="full" justifyContent="center" alignItems="center" flexDir="column">
            <Flex  mb={{ base: "3rem", md: "8rem", lg: "8rem" }}>
                <Text fontSize={{ base: "2rem", md: "2rem", lg: "3rem" }}>My Projects</Text>
            </Flex>
        
            <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={10}  >
                <ProjectsCard img="./Images/projects/portfolio.jpg" />
                <ProjectsCard img="./Images/projects/banyancrew.jpg" />
                <ProjectsCard img="./Images/projects/weather.jpg" />
                <ProjectsCard img="./Images/projects/counter.jpg" />
                <ProjectsCard img="./Images/projects/cf.jpg" />
                <ProjectsCard img="./Images/projects/bigmart.jpg" />
            </Grid>

        </Flex>
    )
}
