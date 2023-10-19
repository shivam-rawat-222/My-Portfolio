import React from 'react'
import { Flex, Image, Text, Box, Heading } from '@chakra-ui/react'
import SkillsCard from './SkillsCard'
import { Grid, GridItem } from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function Experience() {
    return (
        <Flex flexDir="column" id="Experience">
            {/* <Flex w="100%" h="10%" justifyContent="center" alignItems="center">
                <Flex fontSize="3rem"><Text>Experience.Here()</Text></Flex>
            </Flex>

            <Flex h="70%" mt="100px" >
                <Tabs variant="unstyled" display="flex" w="100%" flexDir="row-reverse">
                    <TabList position="flex" flexDir="column" w="40%" fontSize="2rem" >
                        <Flex flexDir="column" justifyContent="center" h="70%" gap="30px" alignItems="center" mt="5rem">
                            <Tab _selected={{ color: "white", boxShadow: "0px 2px 0px grey" }}  >About</Tab>
                            <Tab _selected={{ color: "white", boxShadow: "0px 2px 0px grey" }}  >Technologies </Tab>
                            <Tab _selected={{ color: "white", boxShadow: "0px 2px 0px grey" }}  >What I learn</Tab>

                        </Flex>

                    </TabList>

                    <TabPanels >


                        <TabPanel h="100%" >
                            <Flex h="100%" flexDir="column" ml="6rem" >
                                <Flex w="100%" justifyContent="center" alignItems="center">
                                    <Text fontSize="3em" color="cyan">About</Text>
                                </Flex>
                                <Flex w="100%" h="100%" >
                                    <Flex w="40%" h="100%" justifyContent="center" alignItems="center">
                                        <Image h="15rem" src='./Images/internship/banyan.png' />


                                    </Flex>
                                    <Flex w="90%" >
                                        <Flex p="2rem" fontSize="16px" h="90%" alignItems="center">
                                            <Text>
                                                Digital marketing agency and training organization | Soft skills and business communication training | Career and Skill based professional courses | Software solutions | Vedic mathematics training | Education academy for competitive examinations.

                                                Management Consultation, Digital Marketing Services, Corporate Skills Training, Digital Marketing Training, Vedic Mathematics, Market Research, IELTS/TOEFL, Leadership Training, and Business Consultation <br />
                                                2nd Floor, 160/161, 3A, , Near Chimni Bai Dharmshala, DAV college road,NIT, Faridabad, Haryana 121001, IN


                                            </Text>
                                        </Flex>

                                    </Flex>
                                </Flex>

                            </Flex>
                        </TabPanel>



                        <TabPanel h="100%" >
                            <Flex h="100%" flexDir="column" ml="6rem">
                                <Flex w="100%" justifyContent="center" h="50px" >
                                    <Text fontSize="2.5rem">Technologies</Text>
                                </Flex>
                                <Flex w="100%" h="100%" >
                                    <Flex w="40%" h="100%" justifyContent="center" alignItems="center">
                                        <Image h="20rem" src='./Images/internship/tech.jpg' borderRadius="20px" />


                                    </Flex>
                                    <Flex w="90%" >
                                        <Flex p="2rem" fontSize="16px" h="90%" alignItems="center">
                                            <Text>
                                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ths with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                inter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                lley of type and scrambled it to make a type specimen book. It has survived not


                                            </Text>
                                        </Flex>

                                    </Flex>
                                </Flex>

                            </Flex>
                        </TabPanel>

                        <TabPanel h="100%" >
                            <Flex h="100%" flexDir="column" ml="6rem">
                                <Flex w="100%" justifyContent="center" h="50px" >
                                    <Text fontSize="2.5rem">What I Learn ?</Text>
                                </Flex>
                                <Flex w="100%" h="100%" >
                                    <Flex w="40%" h="100%" justifyContent="center" alignItems="center">
                                        <Image h="20rem" src='./Images/internship/learn.jpg' borderRadius="20px" />


                                    </Flex>
                                    <Flex w="90%" >
                                        <Flex p="2rem" fontSize="16px" h="90%" alignItems="center">
                                            <Text>
                                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ths with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



                                            </Text>
                                        </Flex>

                                    </Flex>
                                </Flex>

                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>


            </Flex> */}




            <Flex flexDir="column" >
                <Flex justifyContent="center" >
                    <Flex flex dir='row' alignItems="center" w="100%" justifyContent="center" mb={{ base: "3rem", md: "8rem", lg: "8rem" }}>
                        <Flex ><Text fontSize={{ base: "2rem", md: "2rem", lg: "3rem" }}>Internships</Text></Flex>

                    </Flex>
                </Flex>

                <Flex >
                    <Tabs isFitted variant='enclosed' w="100%">
                        <TabList mb='1em'>
                            <Tab fontSize={{ base: "sm", md: "2xl", lg: "3xl" }}>About</Tab>
                            <Tab fontSize={{ base: "sm", md: "2xl", lg: "3xl" }}>Technologies</Tab>
                            <Tab fontSize={{ base: "sm", md: "2xl", lg: "3xl" }}>What I Learn ?</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel h="100%" >
                                <Flex h="100%" alignItems="center" mt={{ base: "1rem", md: "5rem", lg: "5rem" }}>


                                    <Flex w={{ base: "100%", md: "100%", lg: "90%" }} h="100%" justifyContent="center" alignItems="center" flexDir={{ base: "column", md: "row", lg: "row" }}>
                                        <Flex w="50%" h="100%" justifyContent="center" alignItems="center" >
                                            <Image boxSize={{ base: "10rem", md: "xs", lg: "xs" }} src='./Images/internship/banyan.webp' />


                                        </Flex>
                                        <Flex w={{ base: "100%", md: "50%", lg: "50%" }} >
                                            <Flex p="2rem" fontSize={{ base: "12px", md: "14px", lg: "16px" }} h="90%" alignItems="center">
                                                <Text textAlign="center">
                                                    Digital marketing agency and training organization | Soft skills and business communication training | Career and Skill based professional courses | Software solutions | Vedic mathematics training | Education academy for competitive examinations.

                                                    Management Consultation, Digital Marketing Services, Corporate Skills Training, Digital Marketing Training, Vedic Mathematics, Market Research, IELTS/TOEFL, Leadership Training, and Business Consultation <br />
                                                    2nd Floor, 160/161, 3A, , Near Chimni Bai Dharmshala, DAV college road,NIT, Faridabad, Haryana 121001, IN


                                                </Text>
                                            </Flex>

                                        </Flex>
                                    </Flex>

                                </Flex>
                            </TabPanel>

                            <TabPanel h="100%" >
                                <Flex h="100%" alignItems="center" mt={{ base: "1rem", md: "5rem", lg: "5rem" }}>


                                    <Flex w={{ base: "100%", md: "100%", lg: "90%" }} h="100%" justifyContent="center" alignItems="center" flexDir={{ base: "column", md: "row", lg: "row" }}>
                                        <Flex w="50%" h="100%" justifyContent="center" alignItems="center" >
                                            <Image src='./Images/internship/tech.jpg' boxSize={{ base: "12rem", md: "13rem", lg: "20rem" }} />


                                        </Flex>
                                        <Flex w={{ base: "100%", md: "50%", lg: "50%" }} >
                                            <Flex p="2rem" fontSize={{ base: "12px", md: "14px", lg: "16px" }} h="90%" alignItems="center">
                                                <Text textAlign="center">
                                                    Digital marketing agency and training organization | Soft skills and business communication training | Career and Skill based professional courses | Software solutions | Vedic mathematics training | Education academy for competitive examinations.

                                                    Management Consultation, Digital Marketing Services, Corporate Skills Training, Digital Marketing Training, Vedic Mathematics, Market Research, IELTS/TOEFL, Leadership Training, and Business Consultation <br />
                                                    2nd Floor, 160/161, 3A, , Near Chimni Bai Dharmshala, DAV college road,NIT, Faridabad, Haryana 121001, IN


                                                </Text>
                                            </Flex>

                                        </Flex>
                                    </Flex>

                                </Flex>
                            </TabPanel>
                            <TabPanel h="100%" >
                                <Flex h="100%" alignItems="center" mt={{ base: "1rem", md: "5rem", lg: "5rem" }}>


                                    <Flex w={{ base: "100%", md: "100%", lg: "90%" }} h="100%" justifyContent="center" alignItems="center" flexDir={{ base: "column", md: "row", lg: "row" }}>
                                        <Flex w="50%" h="100%" justifyContent="center" alignItems="center" >
                                            <Image src='./Images/internship/learn.jpg' boxSize={{ base: "12rem", md: "13rem", lg: "20rem" }} />


                                        </Flex>
                                        <Flex w={{ base: "100%", md: "50%", lg: "50%" }} >
                                            <Flex p="2rem" fontSize={{ base: "12px", md: "14px", lg: "16px" }} h="90%" alignItems="center">
                                                <Text textAlign="center">
                                                    Digital marketing agency and training organization | Soft skills and business communication training | Career and Skill based professional courses | Software solutions | Vedic mathematics training | Education academy for competitive examinations.

                                                    Management Consultation, Digital Marketing Services, Corporate Skills Training, Digital Marketing Training, Vedic Mathematics, Market Research, IELTS/TOEFL, Leadership Training, and Business Consultation <br />
                                                    2nd Floor, 160/161, 3A, , Near Chimni Bai Dharmshala, DAV college road,NIT, Faridabad, Haryana 121001, IN


                                                </Text>
                                            </Flex>

                                        </Flex>
                                    </Flex>

                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>


            </Flex >





        </Flex >

    )
}
