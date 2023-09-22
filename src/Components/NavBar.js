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
        <Flex flexDir="row" justifyContent="space-between" alignItems="center" pos="fixed" w="100%" zIndex="2" bgColor={colorMode == "dark" ? "#000" : "white"}>
            <Flex w="xs" justifyContent="center"  ><Image src='./Images/logo.png' pt="20px" className='logo' /></Flex>
            <Flex flexDir="row" w="3xl" justifyContent="space-evenly" >
                <Flex alignItems="center" w="sm" justifyContent="space-evenly" fontWeight="semibold" fontSize="lg">
                    <Link >Home</Link>
                    <Link>About</Link>
                    <Link >Skills</Link>
                    <Link >Experience</Link>

                </Flex>
                <Button colorScheme='blue' ><Text fontSize="lg" >Contact Us</Text></Button>
                <ColorModeSwitcher justifySelf="flex-end" />





            </Flex>
        </Flex>
    )
}
