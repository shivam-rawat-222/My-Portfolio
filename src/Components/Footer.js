import React from 'react'
import { ButtonGroup, Container, Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
export default function Footer() {
    const { colorMode } = useColorMode()
    return (
        <Flex py={{ base: '12', md: '16' }} w="100%" p="10rem" bgColor={colorMode == "dark" ? " #121212" : "	#FAF9F6"}>
            <Stack spacing={{ base: '4', md: '5' }}>
                <Stack justify="space-between" direction="row" align="center">

                    <ButtonGroup variant="tertiary">
                        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="fg.subtle">
                    &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
                </Text>
            </Stack>
        </Flex>
    )
}
