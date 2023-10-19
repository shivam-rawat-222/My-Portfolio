import React, { useEffect, useState } from 'react'
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
import MyNotes from './Components/MyNotes'
export default function Mainweb() {
    const { colorMode } = useColorMode()
    const [login, setlogin] = useState(false)
    useEffect(()=>{
        let token = localStorage.getItem("token")
        if(token)
        {
            console.log("token agya true kr rha hu ")
            setlogin(true);
        }
        else{
            console.log("token hta rha hu false kr rha hu ")
            setlogin(false)
        }

    },[])
   




    return (
        <>

            <Box >


                <Router>
                    <Routes>

                        <Route exact path='/' element={

                            <>
                            <Flex flexDir="column" gap="50px" bgColor={colorMode == "dark" ? "#0d1117" : "white"}>
                                <NavBar login={login} />
                                <Home />
                                <About />
                                <Skills />
                                <Contact />
                                <Experience />
                                <Projects />
                                <Footer />
                                </Flex>
                            </>
                        }>

                        </Route>

                        <Route exact path='/login' element={

                            <>
                            <Flex flexDir="column" gap="50px" bgColor={colorMode == "dark" ? "#0d1117" : "white"}>
                                <NavBar login={login}/>
                                <Login />
                                </Flex>
                            
                            </>

                        }></Route>
                        <Route exact path='/register' element={
                            <>
                             <Flex flexDir="column" gap="50px" bgColor={colorMode == "dark" ? "#0d1117" : "white"}>
                                <NavBar login={login}/>
                                <Register />
                                </Flex>
                            </>


                        }></Route>
                        <Route exact path='/notes' element={
                            <>
                            <NavBar/>
                            <MyNotes/>
                            </>
                        }></Route>

                    </Routes>
                </Router>

            </Box>


        </>
    )
}
