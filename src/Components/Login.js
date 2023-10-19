import React, { useState } from 'react'
import ContacForm from './ContacForm'
import { Flex, Heading, Image , Text } from '@chakra-ui/react'
import NavBar from './NavBar'
import { Link , Button} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { useColorMode } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { json } from 'react-router-dom'
export default function Login() {
    const history = useNavigate();
    const { colorMode } = useColorMode()
    const [Gmail,setGmail] = useState(" ")
    const [password,setpassword] = useState("")
    const [loading,setloading] = useState("false")
let navigate = useNavigate();

    let handlegmail = (e)=>{
        
        setGmail(e.target.value)
  
 

    }

    let handlepassword = (e)=>{
        
        setpassword(e.target.value)
      
 

    }

    let handlesubmit = async(e) => {
       
        e.preventDefault();
     
        
        let token = await fetch ("https://shivambackend.vercel.app/login"
        // ("https://shivambackend.vercel.app/login"      "https://shivambackend.vercel.app/login"
       
        ,{
            method:'POST',
            headers :{
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                gmail : Gmail,
                password : password
                
            })
        }).then(async (resp)=>{
           
            if(resp.status == 200)
            {
                let token = await resp.text()
               
                localStorage.setItem("token",token);
               
                
           

              history("/")
                window.location.reload();
                
            } else if(resp.status == 400)
            {
                alert("enter your credentials properly")
            }
            else if(resp.status == 402)
            {
                alert("Gmail and Password does not match ! You Should Register first")
            }
            })
            
           
        // }).then(async (resp)=>{
        //     console.log("click")
        //     console.log(resp)
        //     if(resp.ok)
        //     {
        //         console.log(resp)
        //         alert("Wecome To Our Family")
        //         navigate("/")
        //     }
        //     else{
        //         if(resp.status == 400 )
        //         {
        //             alert("Please Complete Your Credentials")
        //         }
                // else  if(resp.status == 402 )
                // {
                //     console.log(resp)
                //     alert("Gmail and Password Does Not Match ! You Must Register")
                // }

            // }
            // {
            //     const token = await resp.text();
            //     console.log(token)
            //     navigate("/")
                
            // }
            
          


            
            
            
        




    }


    return (
        <>
      
        <Flex  >
           
            <Flex mt="5rem" width="full" height="calc(100vh - 5rem)" justifyContent="center" alignItems="center" gap="5rem" >
                <Flex display={{base:"none",md:"none",lg:"flex"}} ><Image src='./Images/gif/login.gif' boxSize="md"/></Flex>
            
                    
                <Flex h="80%" w="30rem" borderRadius="50px" overflow="hidden" border="2px solid #00308F" alignItems="center" flexDir="column" justifyContent="space-evenly" >
                    <Flex h="20%" w="full"   justifyContent="center" alignItems="center" flexDir="column">
                    <Heading >Login Here</Heading>
                    <Text pos="relative"  bottom="-10px" display="block"  textAlign="center">or <Link href="/register"> Register  <ExternalLinkIcon mx='2px'></ExternalLinkIcon></Link> </Text>
                    </Flex>
                   
                    <Flex w="full" h="80%" alignItems="center" justifyContent="center" >
                       
                        <form onSubmit={handlesubmit}  >
                        <Flex  w="20rem" flexDir="column" gap="20px"  p="20px" >
                            <FormControl >
                                <FormLabel >Gmail</FormLabel>
                                <Input type="text" onChange={handlegmail}/>
                                <FormHelperText>Enter Your Registered Gmail</FormHelperText>

                            </FormControl>

                        
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange={handlepassword}/>
                                <FormHelperText>Enter Your Password</FormHelperText>

                            </FormControl>
                            {
                            loading == "true"? <Button isLoading colorScheme='teal' variant='solid'>Button</Button>
                            :
                             <Input type='submit' bgColor="#00308F"/>}
                            
 

                            

                            </Flex>
                        </form>
                        

                    </Flex>
                


                </Flex>
            </Flex>

        </Flex>

        </>

    )
}
