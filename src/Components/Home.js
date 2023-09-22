import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import "./Styles/Homeimage.css"
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Button } from '@chakra-ui/react'
export default function Home() {
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
    return (
        <Flex id="home">
            <Flex w="60%" h="100vh" alignItems="center" justifyContent="center">
                <Flex pos="absolute" left="1px" mb="80px"><Text fontSize="160px" fontWeight="bold" opacity={0.07} >RAWAT</Text></Flex>
                <Flex flexDir="column" h="40%" justifyContent="center" pos="absolute">
                    <Flex ><Text fontSize="30px" fontFamily="Inter" fontWeight="semibold" >HΞLLO </Text><Text ml="10px" mt="10px">_______________________________________________________________</Text></Flex>
                    <Flex ><Text fontSize="45px" fontFamily="Inter" fontWeight="bold"   >I AM <Text display="inline" color="#137DC6" fontWeight="bold">SHIVAM RAWAT</Text></Text></Flex>
                    <Flex ><Text fontSize="40px" fontWeight="semibold" >{val}</Text></Flex>

                    <Flex mt="20px"><Button border="2px solid black" onClick={() => { downloadFile("/download", "shivam_resume.pdf") }}>Resume <Flex mt="4px" ml="8px"><AiOutlineCloudDownload size="30px" /></Flex></Button></Flex>
                </Flex>



            </Flex>
            <Flex alignItems="center" h="80vh" >
                <Image src='./Images/Home.png' className='backlight' />
            </Flex>
        </Flex >
    )


}