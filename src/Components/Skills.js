import React from 'react'
import { Flex, Image, Text, Box } from '@chakra-ui/react'
import SkillsCard from './SkillsCard'
import { Grid, GridItem } from '@chakra-ui/react'
export default function Skills() {
    const heading = "<Skills/>"
    return (
        <Flex flexDir="column" id='skills' py="5rem">
            <Flex justifyContent="center" w="100%">
                <Flex flex dir='row' alignItems="center" mb="50px">
                    <Flex><Text fontSize="3rem">{heading}</Text></Flex>
                    <Image src='./Images/skills.png' h="150px" pos="relative" right="85px" bottom="19px" />

                </Flex>
            </Flex>
            <Flex flexDir="row" mx="30px" >
                <Flex w="50%" flexDir="column">
                    <Flex h="100px" justifyContent="center" alignItems="center"><Text fontSize="40px" >FrameWorks</Text></Flex>
                    <Flex justifyContent="center" mt="20px">
                        <Grid templateColumns='repeat(2, 0.1fr)' gap={30}>




                            <SkillsCard logo="./Images/webdev/react.png" name="React.js" />
                            <SkillsCard logo="./Images/webdev/next.png" name="Next.js" />
                            <SkillsCard logo="./Images/webdev/node.png" name="Node.js" />

                            <SkillsCard logo="./Images/webdev/chakra.png" name="Chakra UI" />
                            <SkillsCard logo="./Images/webdev/Sanity.png" name="Sanity" />

                        </Grid>
                    </Flex>


                </Flex>
                <Flex w="50%" flexDir="column">
                    <Flex h="100px" justifyContent="center" alignItems="center" ><Text fontSize="40px" >Languages</Text></Flex>
                    <Flex justifyContent="center" mt="20px">
                        <Grid templateColumns='repeat(2, 0.1fr)' gap={30}>
                            <SkillsCard logo="./Images/languages/Html.png" name="HTML" />

                            <SkillsCard logo="./Images/languages/Css.png" name="CSS" />
                            <SkillsCard logo="./Images/languages/js.png" name="JavaScript" />
                            <SkillsCard logo="./Images/languages/cpp.png" name="C++" />
                            <SkillsCard logo="./Images/languages/java.png" name="java" />



                        </Grid>
                    </Flex>

                </Flex>
                <Flex w="50%" flexDir="column">
                    <Flex h="100px" justifyContent="center" alignItems="center"><Text fontSize="40px" >Database/Platforms</Text></Flex>
                    <Flex justifyContent="center" mt="20px">
                        <Grid templateColumns='repeat(2, 0.1fr)' gap={30}>
                            <SkillsCard logo="./Images/database/mongo.png" name="MongoDB" />
                            <SkillsCard logo="./Images/database/mysql.png" name="MySQL" />
                            <SkillsCard logo="./Images/database/git.png" name="GitHub" />




                        </Grid>
                    </Flex>
                </Flex>



            </Flex>
        </Flex >

    )
}
