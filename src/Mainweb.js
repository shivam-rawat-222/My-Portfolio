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
import Login from './Components/Login'
import ProjectsCard from './Components/ProjectsCard'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Components/Register'
export default function Mainweb() {
    const { colorMode } = useColorMode()

    return (
        <>
        <NavBar />
         <Box bgColor={colorMode == "dark" ? "#0d1117" : "white"}>
           
     
        <Router>
            <Routes>
            
                <Route exact path='/' element={
           
                <>
                <Home />
                <About />
                <Skills />
                <Contact />
                <Experience />
                <Projects />
                <Footer />
                </>
                }>

            </Route>

            <Route exact path='/login' element={

              
               <Login/>

           }></Route>
            <Route exact path='/register' element={

              
               <Register/>

            }></Route>
         
            </Routes>
        </Router>

        </Box>
       

</>
    )
}
