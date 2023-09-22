import React from 'react'
import "../Components/Styles/ContactForm.css"
import { useState } from 'react'

import { Flex, Image, Spacer, Text } from '@chakra-ui/react'

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








  return (
    <Flex mt={200} className='box' >
      <Flex flexDir="column" w="100%" h="50%" >
        <Text fontSize="40px" fontFamily="Inter" fontWeight="bold" ml={10}>Let’s discuss  <Text fontWeight="bold">on something <Text display="inline" color="#137DC6" fontWeight="bold">cool</Text> <Text display="inline" fontWeight="bold">together!</Text> </Text></Text>
        <Image src='./Images/contact.png' paddingTop="10px" h="65%" w='65%'></Image>
      </Flex>
      <Flex className='2b' w="100%" h="60vh" onSubmit={handleSubmit}>
        <form className='form' >
          <input id="f" className='name' type='text' placeholder='Name' required autoComplete='off' onChange={handleInput} name="name" /><br></br>{userErr ? <span>*Numbers are not allowed* </span> : ""}
          <Spacer></Spacer>
          <input id="f" className='email' type='email' placeholder='Email' autoComplete='off' required onChange={handleInput} name="email" />
          <Spacer></Spacer>
          <textarea id='f' className='mess' placeholder='Your Message' autoComplete='off' required onChange={handleInput} name="message" /><br></br>{messageErr ? <span>*Enter more than 4 characters* </span> : ""}
          <Spacer></Spacer>
          <input className='button' type='Submit' value="Create Connection" />
        </form>
      </Flex>
    </Flex>
  )

}

export default ContacForm
