import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import React from 'react'

export default function Experience() {
    return (
        <Flex h="100vh" flexDir="column" id="Experience" py="5rem">
            <Flex w="100%" h="10%" justifyContent="center" alignItems="center">
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

                        {/* Tab 1  */}
                        <TabPanel h="100%" >
                            <Flex h="100%" flexDir="column" ml="6rem" >
                                <Flex w="100%" justifyContent="center" alignItems="center">
                                    <Text fontSize="3em" color="cyan">About</Text>
                                </Flex>
                                <Flex w="100%" h="100%" >
                                    <Flex w="40%" h="100%" justifyContent="center" alignItems="center">
                                        <Image h="15rem" src='./images/internship/banyan.png' />


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
                        {/* tab 2  */}


                        <TabPanel h="100%" >
                            <Flex h="100%" flexDir="column" ml="6rem">
                                <Flex w="100%" justifyContent="center" h="50px" >
                                    <Text fontSize="2.5rem">Technologies</Text>
                                </Flex>
                                <Flex w="100%" h="100%" >
                                    <Flex w="40%" h="100%" justifyContent="center" alignItems="center">
                                        <Image h="20rem" src='./images/internship/tech.jpg' borderRadius="20px" />


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
                        {/* /TAB 3  */}
                        <TabPanel h="100%" >
                            <Flex h="100%" flexDir="column" ml="6rem">
                                <Flex w="100%" justifyContent="center" h="50px" >
                                    <Text fontSize="2.5rem">What I Learn ?</Text>
                                </Flex>
                                <Flex w="100%" h="100%" >
                                    <Flex w="40%" h="100%" justifyContent="center" alignItems="center">
                                        <Image h="20rem" src='./images/internship/learn.jpg' borderRadius="20px" />


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


            </Flex>





        </Flex >

    )
}
