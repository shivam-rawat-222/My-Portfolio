import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import "./Styles/Homeimage.css"
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
export default function Home() {

    const { colorMode } = useColorMode()
    let shown = false;
    let name;
    function inputname() {
        if (shown == false) {
            name = prompt("may i know your name ", " ");



        }
        shown = true;

    }




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
    // const { colorMode, toggleColorMode } = useColorMode();
    // inputname();
    return (
        <Flex id="home" bgColor={colorMode == "dark" ? "#0d1117" : "white"} flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }} >

            <Flex w={{ base: "full", md: "full", lg: "60%" }} h="100vh" alignItems="center" justifyContent="center" >

                <Flex pos="absolute" left="1px" mb="80px">
                    <Text fontSize="160px" fontWeight="bold" opacity={0.07} display={{ base: "none", md: "none", lg: "block" }}>
                        RAWAT
                    </Text>
                </Flex>


                <Flex flexDir="column" justifyContent="center" pos="absolute" padding={{ base: "20px", md: "none", lg: "none" }} >
                    <Flex fontSize={{ base: "30px", md: "50px", lg: "50px" }}><Text fontFamily="Inter" fontWeight="semibold" >HΞLLO Prateek</Text></Flex>
                    <Flex fontSize={{ base: "30px", md: "50px", lg: "50px" }}><Text fontFamily="Inter" fontWeight="bold"   >I AM <Text display="inline" color="#137DC6" fontWeight="bold">SHIVAM RAWAT</Text></Text></Flex>
                    <Flex fontSize={{ base: "30px", md: "50px", lg: "50px" }} ><Text fontWeight="semibold" >{val}</Text></Flex>

                    <Flex mt="20px"><Button border="2px solid black" onClick={() => { downloadFile("https://shivambackend.vercel.app/download", "shivam_resume.pdf") }}>Resume <Flex mt="4px" ml="8px"><AiOutlineCloudDownload size="30px" /></Flex></Button></Flex>
                </Flex>



            </Flex>


            <Flex alignItems="center" h={{ base: "90vh", md: "80vh", lg: "80vh" }} justifyContent={{ base: "center", md: "center", lg: "none" }}>
                <Image src='./Images/home.png' className='backlight' boxSize={{ base: "xs", md: "xs", lg: "sm" }} />
            </Flex>
        </Flex >
    )


}