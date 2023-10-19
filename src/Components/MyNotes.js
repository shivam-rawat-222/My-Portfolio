import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import NavBar from "./NavBar";
import NotesCard from "./NotesCard";
import imageUrlBuilder from '@sanity/image-url'
import Sanity from "../Sanity"

import { useState } from "react";
export default function MyNotes() {
    const builder = imageUrlBuilder(Sanity)

function urlFor(source) {
  return builder.image(source)
}

    

    const [data, setdata] = useState([]);
    useEffect(() => {
        Sanity.fetch('*[_type == "notes"]').then((result) => {
            console.log(result[0])
            setdata(result)

        }).catch((err) => {
            console.log("er")

        });
    }, [])

    return (
        <>
            <Flex pt="5rem" justifyContent="center">
                <Flex flexDir="column" w="full" alignItems="center">
                    <Flex fontSize="5xl">My Notes</Flex>
                    <Flex w="full" h="full" justifyContent="center" alignItems="center">
                        <Grid templateColumns='repeat(3, 1fr)' w="100%" gap={30} p="10rem" >
                            {
                                

                                data.map((val, key) => {
                                    return(
                                        <NotesCard key={key} img={urlFor(val.img.asset._ref)} title={val.name} about={val.about}/>
                                    )
                                    

                                    

                                })
                            }


                        </Grid>
                    </Flex>
                </Flex>
            </Flex>

        </>
    )




}