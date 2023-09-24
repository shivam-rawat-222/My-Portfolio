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

    <Flex h="25rem" w="25rem" p="30px" borderRadius="20px" justifyContent="center">

      <form >

        <FormControl as="fieldset" mb="40px" w="20rem">

          <Input placeholder='Full Name' variant="flushed" />
          {iserror
            ? <FormErrorMessage>Plz Enter Your Valid Full Name</FormErrorMessage>
            : <FormHelperText>Plz Enter Your Full Name</FormHelperText>
          }


        </FormControl>
        <FormControl as="fieldset" mb="40px">
          <Input placeholder='Email' variant="flushed" />
          {iserror
            ? <FormErrorMessage>Plz Enter the valid email</FormErrorMessage>
            : <FormHelperText>Plz Enter Your Email</FormHelperText>
          }


        </FormControl>
        <FormControl as="fieldset"  >
          <Textarea placeholder="Enter Your Meaage Here" maxH="150px" />


        </FormControl>
        <Flex justifyContent="center" py="20px">
          <Button colorScheme='purple' w="15rem">Submit</Button>
        </Flex>

      </form>


    </Flex >



  )

}
export default ContacForm
