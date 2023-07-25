import React from 'react'
import { Button, Box } from '@chakra-ui/react'

const SampleButton = () => {
  return (
    <Box display="flex" justifyContent="center" mt="3%">
      <Button
        bg="blue.500"
        color="white"
        w={[300, 400, 450]}
        h="50px"
        borderRadius="2xl"
        fontSize={{ base: '18px', md: '20px', lg: '25px' }}
      >
        VIEW SAMPLE REPORT
      </Button>
    </Box>
  )
}

export default SampleButton
