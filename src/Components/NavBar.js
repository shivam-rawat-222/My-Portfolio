import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


import "./Styles/Navbar.css"
import { useColorMode } from '@chakra-ui/react'
import { Text, Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { WiSolarEclipse, WiStormShowers } from "react-icons/wi"
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useNavigate } from 'react-router-dom'


export default function NavBar({login}) {
let navigate = useNavigate();
    const { colorMode } = useColorMode()

let logoutuser =(e)=>{
    e.preventDefault();
    localStorage.removeItem("token")
    
    navigate("/login")

}

    return (
        <Flex flexDir="row" justifyContent="space-between" alignItems="center" w="100%" h={{ base: "4rem", md: "5rem", lg: "5rem" }} pos="fixed" zIndex="2" bgColor={colorMode == "dark" ? " #121212" : "#FAF9F6"}>

            <Flex  justifyContent="center" alignItems="center"   w={{ base: "200px", md: "10rem", lg: "20rem" }}><Image  src='./Images/logo.png' filter={colorMode == "light" ? "brightness(0%)" : "brightness(90%)"} pt="20px" className='logo' /></Flex>


            <Flex flexDir="row" justifyContent="center"  >

                <Flex alignItems="center" w="3xl" justifyContent="space-evenly" fontWeight="semibold" fontSize="lg" display={{ base: "none", md: "none", lg: "flex" }} >
                    <Link><a href='/'>Home</a></Link>
                    <Link>About</Link>
                    <Link >Skills</Link>
                    <Link >Experience</Link>
                    
                </Flex>

                <Flex  gap={{ base: "10px", md: "20px", lg: "20px" }}>
                <Button colorScheme='blue' ml={{ base: "10px", md: "50px", lg: "50px" }} w={{ base: "5rem", md: "unset", lg: "unset" }}><a href='/login'  > <Text fontSize={{ base: "sm", md: "sm", lg: "lg" }}>Contact Us</Text></a></Button>
                {login?<Button colorScheme='blue' w={{ base: "5rem", md: "unset", lg: "unset" }} ><a href='/login' onClick={logoutuser} > <Text fontSize={{ base: "sm", md: "sm", lg: "lg" }}>Logout</Text></a></Button>:
                <Button w={{ base: "5rem", md: "unset", lg: "unset" }} colorScheme='blue' ><a href='/login'  ><Text fontSize={{ base: "sm", md: "sm", lg: "lg" }}>Login</Text></a></Button>}
                

                
                
                
                
                

               
                <Flex   ><ColorModeSwitcher  /></Flex>
                
                </Flex>

     


            </Flex>









        </Flex>
    )
}
