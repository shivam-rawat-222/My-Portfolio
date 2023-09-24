import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'


import "./Styles/Navbar.css"
import { useColorMode } from '@chakra-ui/react'
import { Text, Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { WiSolarEclipse, WiStormShowers } from "react-icons/wi"
import { ColorModeSwitcher } from '../ColorModeSwitcher';


export default function NavBar() {
    const { colorMode } = useColorMode()


    return (
        <Flex flexDir="row" justifyContent="space-between" alignItems="center" pos="fixed" w="100%" zIndex="2" bgColor={colorMode == "dark" ? " #121212" : "#FAF9F6"} >

            <Flex justifyContent="center" pos="relative" left={{ base: "10px", md: "30px", lg: "40px" }}><Image src='./Images/logo.png' filter={colorMode == "light" ? "brightness(0%)" : "brightness(90%)"} pt="20px" className='logo' /></Flex>


            <Flex flexDir="row" justifyContent="center" >

                <Flex alignItems="center" w="3xl" justifyContent="space-evenly" fontWeight="semibold" fontSize="lg" display={{ base: "none", md: "none", lg: "flex" }} >
                    <Link >Home</Link>
                    <Link>About</Link>
                    <Link >Skills</Link>
                    <Link >Experience</Link>
                    <Button colorScheme='blue' ml="50px" ><Text fontSize="lg" >Contact Us</Text></Button>
                </Flex>

                <Flex pos="relative" right={{ base: "10px", md: "30px", lg: "50px" }}><ColorModeSwitcher justifySelf="flex-end" /></Flex>


            </Flex>









        </Flex>
    )
}
