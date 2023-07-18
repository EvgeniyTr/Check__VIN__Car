import React from 'react'
import { HStack,Heading,Box,Square } from '@chakra-ui/react'
import {TimeIcon} from "@chakra-ui/icons"
import { Image } from '@chakra-ui/react'
import saveTime from "../public/shield.png"


const Hero = () => {
  return (
    <Box>
        <Box display="flex" justifyContent="center"  width={"100%"}>
        <Heading mt={"10%"} w="100%" ml="15%" mb="20" alignItems={"center"} fontSize={{base:"24px", md: "28px", lg: "30px"}}>
        VIN check reports for all makes and models of Cars,Trucks,RVs and Motorcycles
      </Heading>
        </Box>
        <Box display="flex" w={"full"} h="200px" bg={"blue.400"}>
            <Box>
            <HStack>
               <Image src={`${saveTime}`} alt='save time' />
            </HStack>
            </Box>
        </Box>
    </Box>
  )
}

export default Hero
