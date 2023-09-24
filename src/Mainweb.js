import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import { useColorMode } from '@chakra-ui/react'
import Skills from './Components/Skills'
import ContacForm from './Components/ContacForm'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import ProjectsCard from './Components/ProjectsCard'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
export default function Mainweb() {
    const { colorMode } = useColorMode()

    return (
        <>
            <Box bgColor={colorMode == "dark" ? "#0d1117" : "white"} >
                <NavBar />
                <Home />
                <About />
                <Skills />
                <Contact />
                <Experience />
                <Projects />
                <Footer />

            </Box>
        </>


    )
}
