import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import "./Styles/Homeimage.css"
import { motion } from "framer-motion"
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
export default function Home() {
    const [name, setname] = useState("")
    const { colorMode } = useColorMode()
    let shown = false;

    function inputname() {
        if (shown == false) {
            let value = prompt("may i know your name ", " ");
            if (!value) {
                setname("Unknown")

            }
            setname(value);



        }
        shown = true;

    }
    // useEffect(() => {
    //     inputname();
    // }, []);




    function downloadFile(url, filename) {


        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then((blob) => {

                const blobUrl = URL.createObjectURL(blob);


                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = filename;

                a.dispatchEvent(new MouseEvent('click'));


                URL.revokeObjectURL(blobUrl);
            })
            .catch((error) => {
                console.error('Error downloading file:', error);
            });



    }

    const val = "<Web Developer/>"

    // inputname();
    return (
        <Flex id="home" flexDir={{ base: "column", md: "column", lg: "row" }} pt="80px">

            <Flex w={{ base: "full", md: "full", lg: "60%" }} h={{ base: "40vh", md: "90vh", lg: "90vh" }} alignItems="center" justifyContent="center" >

                <Flex pos="absolute" left="1px" mb="80px">
                    <Text fontSize="160px" fontWeight="bold" opacity={0.07} display={{ base: "none", md: "none", lg: "block" }}>
                        RAWAT
                    </Text>
                </Flex>


                <Flex flexDir="column" justifyContent="center" pos="absolute" padding={{ base: "0px", md: "none", lg: "none" }} >
                    <Flex fontSize={{ base: "30px", md: "50px", lg: "50px" }}><Text fontFamily="Inter" fontWeight="semibold" color="blue.200">HΞLLO _____________</Text></Flex>
                    <Flex fontSize={{ base: "30px", md: "50px", lg: "50px" }}><Text fontFamily="Inter" fontWeight="bold"   >I AM <Text display="inline" color="#137DC6" fontWeight="bold">SHIVAM RAWAT</Text></Text></Flex>
                    <Flex fontSize={{ base: "30px", md: "50px", lg: "50px" }} ><Text fontWeight="semibold" >{val}</Text></Flex>

                    <Flex mt="20px"><Button border="2px solid black" onClick={() => { downloadFile("https://shivambackend.vercel.app/download", "shivam_resume.pdf") }}>Resume <Flex mt="4px" ml="8px"><AiOutlineCloudDownload size="30px" /></Flex></Button></Flex>
                </Flex>



            </Flex>


            <Flex alignItems="center" h={{ base: "full", md: "80vh", lg: "80vh" }} justifyContent={{ base: "center", md: "center", lg: "none" }}>
                <Image src='./Images/home.png' className='backlight' boxSize={{ base: "15rem", md: "sm", lg: "sm" }} />
            </Flex>
        </Flex >
    )


}