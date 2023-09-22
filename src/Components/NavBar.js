import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'


import "./Styles/Navbar.css"
// 
import { Text, Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { WiSolarEclipse, WiStormShowers } from "react-icons/wi"
import { ColorModeSwitcher } from '../ColorModeSwitcher';


export default function NavBar() {


    return (
        <Flex flexDir="row" justifyContent="space-between" alignItems="center" pos="fixed" w="100%" className="nav" >
            <Flex w="xs" justifyContent="center"  ><Image src='./Images/logo.png' pt="20px" className='logo' /></Flex>
            <Flex flexDir="row" w="3xl" justifyContent="space-evenly" >
                <Flex alignItems="center" w="sm" justifyContent="space-evenly" fontWeight="semibold" fontSize="lg">
                    <Link >Home</Link>
                    <Link>About</Link>
                    <Link >Skills</Link>
                    <Link >Experience</Link>
                    {/* <Box >About</Box>
                    <Box >Skills</Box>
                    <Box >Experience</Box> */}
                </Flex>
                <Button colorScheme='blue' ><Text fontSize="lg" >Contact Us</Text></Button>
                <ColorModeSwitcher justifySelf="flex-end" />





            </Flex>
        </Flex>
    )
}
