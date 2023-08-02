import React from 'react'
import { HStack, Heading, Box, Square, Text, Flex } from '@chakra-ui/react'
import { BsClock } from 'react-icons/bs'
import { LiaCoinsSolid } from 'react-icons/lia'
import { GoShieldCheck } from 'react-icons/go'

const Hero = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" width={'100%'}>
        <Heading
          mt={'10%'}
          // w="100%"
          ml="auto"
          mr="auto"
          mb="20"
          pl="20px"
          pr="20px"
          alignItems={'center'}
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
          textAlign="center"
        >
          VIN check reports for all makes and models of Cars,Trucks,RVs and
          Motorcycles
        </Heading>
      </Box>
      <Box display="flex" w={'full'} h="200px" bg={'blue.400'}>
        <Flex
          w={{ base: '100%', md: '80%', lg: '60%' }}
          ml="auto"
          mr="auto"
          fontSize={{ base: '80px', md: '95px', lg: '120px' }}
          textColor="white"
          justify="space-around"
          align="center"
        >
          <Box>
            <BsClock />
            <Text fontSize={{ base: '16px', md: '20px', lg: '24px' }} mt="5px">
              SAVE TIME
            </Text>
          </Box>
          <Box>
            <LiaCoinsSolid />
            <Text fontSize={{ base: '16px', md: '20px', lg: '24px' }} mt="5px">
              SAVE MONEY
            </Text>
          </Box>
          <Box>
            <GoShieldCheck />
            <Text fontSize={{ base: '16px', md: '20px', lg: '24px' }} mt="5px">
              PROTECT
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero
