import React, { useState } from 'react'
import ContacForm from './ContacForm'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom";

import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Register() {
    const navigate = useNavigate();
    const [username , setusername] = useState("")
    const [gmail , setgmail] = useState("")
    const [password , setpassword] = useState("")
    const [mailerror,setmailerror] = useState(true)

    let handleusername = (e)=>{
        setusername(e.target.value)
        console.log(username)
    }
    let handlegmail = (e)=>{
        setgmail(e.target.value)
        console.log(gmail)
    }
    let handlepassword = (e)=>{
        setpassword(e.target.value)
        console.log(password)
    }

    let handlesubmit= async(e)=>{
        e.preventDefault();


        let resp = await fetch("https://shivambackend.vercel.app/register/new" , {
            method:"POST",

            headers:{
          
            "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                username : username,
                gmail : gmail,
                password : password
             })
        }).then((resp)=>{
            if(resp)
            {
                console.log(resp)
                if(resp.status == 200)
                {
                    alert("You Are Successfully Registered")
                    navigate("/")

                }
                else if(resp.status == 401)
                {
                   
                    alert("User has already been registered with this gmail ")
                    
                    
                }
                
            }
           
        })
        
       
    }
    return (
        <>

            <Flex bgColor="black">
                <NavBar />
                <Flex  mt="5rem" width="full" height="calc(100vh - 5rem)" justifyContent="center" alignItems="center" gap="5rem" flexDir="row-reverse">
                <Flex borderRadius="20px" overflow="hidden" h="50%" w="30%"><Image src='./Images/gif/register.gif'/></Flex>
                    <Flex h="80%" w="30rem" border="10px solid #445D48" borderRadius="50px" overflow="hidden" alignItems="center" flexDir="column" justifyContent="space-evenly" >
                        <Flex h="20%" w="full" bgColor="#445D48" justifyContent="center" alignItems="center" flexDir="column">
                            <Heading >Register</Heading>
                            <Text>or</Text>
                            <Text>Already Have An Account ? <Link href='/login'>
                                Login <ExternalLinkIcon mx='2px' />
                            </Link></Text>

                        </Flex>

                        <Flex w="full" h="80%" alignItems="center" justifyContent="center" >

                            <form onSubmit={handlesubmit} >
                                <Flex w="20rem" flexDir="column" gap="20px"  >
                                    <FormControl >
                                        <FormLabel >Username</FormLabel>
                                        <Input type="text" onChange={handleusername}/>
                                        <FormHelperText>Enter Your Username</FormHelperText>

                                    </FormControl>
                                    <FormControl >
                                        <FormLabel >Gmail</FormLabel>
                                        <Input type="email"  onChange={handlegmail} />
                                        <FormErrorMessage>User has already registered with this mail</FormErrorMessage>
                                        

                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Password</FormLabel>
                                        <Input type="password"  onChange={handlepassword}/>
                                        <FormHelperText>Enter Your Password</FormHelperText>

                                    </FormControl>
                                    <Input type='submit' value="Register" bgColor="#445D48"/>



                                </Flex>
                            </form>


                        </Flex>



                    </Flex>
                </Flex>

            </Flex>

        </>

    )
    }
