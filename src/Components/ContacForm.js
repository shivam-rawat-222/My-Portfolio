import React from 'react'
import "../Components/Styles/ContactForm.css"
import { useState } from 'react'

import { Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Spacer, Text } from '@chakra-ui/react'
import { Form } from 'react-router-dom'
import { Input, Button } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
function ContacForm() {

  const [userErr, setUserErr] = useState(false)
  const [messageErr, setMessageErr] = useState(false)


  function loginHandle(e) {
    alert("Thank for submitting")
    e.preventDefault()
  }
  function userHandler(e) {
    let naam = e.target.value;
    if (!isNaN(naam)) {
      setUserErr(true)
    }
    else {
      setUserErr(false)
    }
  }
  function messageHandler(e) {
    let naam = e.target.value;
    if (naam.length < 4) {
      setMessageErr(true)
    }
    else {
      setMessageErr(false)
    }
  }

  const [data, setdata] = useState({
    name: "",
    email: "",
    message: ""

  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setdata({ ...data, [name]: value })
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = data
    console.log(data)
    const response = await fetch("https://shivambackend.vercel.app/Contact/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })

    if (response.ok === false || !response) {
      console.log(response);
    }
    else {
      alert("thankyou for the response")
    }


  }






  let iserror = false

  return (

    <Flex borderRadius="20px" justifyContent="center" >

      <form onSubmit={handleSubmit} >

        <FormControl as="fieldset" mb="20px"  w={{base:"15rem",md:"20rem",lg:"20rem"}}>

          <Input placeholder='Full Name' variant="flushed" name="name" onChange={handleInput} />
          {iserror
            ? <FormErrorMessage>Plz Enter Your Valid Full Name</FormErrorMessage>
            : <FormHelperText>Plz Enter Your Full Name</FormHelperText>
          }


        </FormControl>
        <FormControl as="fieldset" mb="30px" >
          <Input placeholder='Email' variant="flushed" name="email" onChange={handleInput} />
          {iserror
            ? <FormErrorMessage>Plz Enter the valid email</FormErrorMessage>
            : <FormHelperText>Plz Enter Your Email</FormHelperText>
          }


        </FormControl>
        <FormControl as="fieldset" >
          <Textarea placeholder="Enter Your Meaage Here" name="message" maxH="150px" onChange={handleInput} />


        </FormControl>
        <Flex  justifyContent="center"><Button m="20px" w="10rem" type="submit" colorScheme="blue">send</Button></Flex>
        

      </form>


    </Flex >



  )

}
export default ContacForm
