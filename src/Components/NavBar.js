import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import "./Styles/Navbar.css"
import { useColorMode } from '@chakra-ui/react'
import { Text, Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { WiSolarEclipse, WiStormShowers } from "react-icons/wi"
import { ColorModeSwitcher } from '../ColorModeSwitcher';



export default function NavBar() {
    let navigate = useNavigate();
    const { colorMode } = useColorMode()
    const [login,setlogin] = useState(false)
    useEffect(()=>{
        let token = localStorage.getItem("token")
        if(token)
        {
            setlogin(true);
            console.log(token)


        }
        else{
            console.log("user is not logged in ")
        }

    },[])

    let logoutuser = ()=>{
        localStorage.removeItem("token");
        setlogin(false)
        alert("user is logged out successfully")
        navigate("/")
    }


    return (
        <Flex flexDir="row" justifyContent="space-between" alignItems="center" w="100%" h={{ base: "4rem", md: "5rem", lg: "5rem" }} pos="fixed" zIndex="2" bgColor={colorMode == "dark" ? " #121212" : "#FAF9F6"}>

            <Flex  justifyContent="center" alignItems="center" w={{ base: "200px", md: "10rem", lg: "20rem" }} display={{ base: "none", md: "block", lg: "block" }}><Image  src='./Images/logo.png' filter={colorMode == "light" ? "brightness(0%)" : "brightness(90%)"} pt="20px" className='logo' /></Flex>


            <Flex flexDir="row" justifyContent="center"  >

                <Flex alignItems="center" w="3xl" justifyContent="space-evenly" fontWeight="semibold" fontSize="lg" display={{ base: "none", md: "none", lg: "flex" }} >
                    <Link><a href='/'>Home</a></Link>
                    <Link>About</Link>
                    <Link >Skills</Link>
                    <Link >Experience</Link>
                    
                </Flex>

                <Flex  gap="20px">
                <Button colorScheme='blue' ml="50px" ><Text fontSize="lg" >Contact Us</Text></Button>
                {login ? <Button  colorScheme='blue' onClick={logoutuser}>Logout</Button> : <Button  colorScheme='blue'><a href='/login'>Login</a></Button>}
                
               
                {/* <Flex ><ColorModeSwitcher  /></Flex> */}
                
                </Flex>

     


            </Flex>









        </Flex>
    )
}
