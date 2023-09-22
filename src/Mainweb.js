import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'

import Skills from './Components/Skills'
import ContacForm from './Components/ContacForm'
import Experience from './Components/Experience'
export default function Mainweb() {

    return (
        <>
            <Box>
                <NavBar />
                <Home />
                <About />
                <Skills />
                <ContacForm />

                <Experience />
            </Box>
        </>


    )
}
