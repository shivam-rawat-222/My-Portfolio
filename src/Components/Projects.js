import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'
import ProjectsCard from './ProjectsCard'
export default function Projects() {
    return (
        <Flex h="full" justifyContent="center" alignItems="center" flexDir="column">
            <Flex>
                <Text fontSize="6xl">My Projects</Text>
            </Flex>
            <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={20} p="7rem">
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
