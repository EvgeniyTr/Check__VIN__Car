import React from 'react'
import { Button, Box, Link } from '@chakra-ui/react'

const SampleButton = () => {
  return (
    <Box display="flex" justifyContent="center" mt="3%">
      <Link
        href="/Sample.pdf"
        target="_blank"
        bg="blue.500"
        color="white"
        w={[300, 400, 450]}
        h="60px"
        borderRadius="2xl"
        textAlign="center"
        p=".8rem"
        fontWeight="bold"
        fontSize={{ base: '18px', md: '20px', lg: '25px' }}
      >
        VIEW SAMPLE REPORT
      </Link>
    </Box>
  )
}

export default SampleButton
