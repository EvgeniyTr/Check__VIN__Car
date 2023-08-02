import React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box display="flex" w={'full'} h="100px" bg={'blue.400'}>
      <Box
        display="flex"
        justifyContent={'space-between'}
        alignItems="center"
        w={'100%'}
      >
        <Box display="flex">
          <Link
            mt="40px"
            ml={'52px'}
            fontSize={'2xl'}
            href="/"
            textColor="white"
          >
            CheckCar
          </Link>
        </Box>
        <Box display={'flex'} justifyContent="flex-end">
          <Text mt="40px" mr="58px" fontSize={'2xl'}>
            EN
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
