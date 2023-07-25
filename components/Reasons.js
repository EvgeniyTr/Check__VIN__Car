import React from 'react'
import { List, ListItem, ListIcon, Box, Heading, Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const Reasons = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        ml={[8, 3]}
      >
        <Heading
          display="flex"
          justifyContent="center"
          flexDirection="column"
          mt={'5%'}
          w="100%"
          mb="10"
          alignItems={'center'}
          fontSize={{ base: '28px', md: '32px', lg: '35px' }}
        >
          10 reason why you must check VIN code
          <Box bg="blue.500" h="3px" m="0 auto" w={['90%', '90%', '50%']}></Box>
        </Heading>
      </Box>
      <Box display="flex" justifyContent="center" ml="10%">
        <List space={3}>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Verify the car's identity
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Check for accidents and damage
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Learn about the car's maintenance history
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Avoid buying a stolen car
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Determine the car's value
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Identify any liens on the vehicle
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Check for odemeter tampering
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            See if the car has been used as a rental or fleet vehicle
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Determine if the car has been in a flood or other natural disaster
          </ListItem>
          <ListItem fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            Check for any outstanding recalls on the vehicle
          </ListItem>
        </List>
      </Box>
      <Box>
        <Heading
          display="flex"
          justifyContent="center"
          flexDirection="column"
          mt={'5%'}
          w="100%"
          alignItems={'center'}
          fontSize={{ base: '28px', md: '32px', lg: '35px' }}
        >
          Why "our company"
        </Heading>
        <Box bg="blue.500" h="3px" w={['80%', '90%', '40%']} m="0 auto"></Box>
        <Box display="flex" justifyContent="center" mt="1.5%">
          <Text
            disply="flex"
            w={['80%', '90%', '40%']}
            fontSize={{ base: '18px', md: '22px', lg: '25px' }}
          >
            Saving customers time and money by quickly and efficiently checking
            a car's VIN code and providing all relevant information in a clear
            and concise report
          </Text>
        </Box>
      </Box>
      <Box>
        <Heading
          display="flex"
          justifyContent="center"
          flexDirection="column"
          mt={'5%'}
          w="100%"
          alignItems={'center'}
          fontSize={{ base: '28px', md: '32px', lg: '35px' }}
        >
          Check fast and easy
        </Heading>
        <Box bg="blue.500" h="3px" w={['80%', '90%', '40%']} m="0 auto"></Box>
        <Box display="flex" justifyContent="center" mt="1.5%">
          <Text
            disply="flex"
            w={['80%', '90%', '40%']}
            fontSize={{ base: '18px', md: '22px', lg: '25px' }}
          >
            Review the report to get information about the car's
            make,model,year,engine size,transmission type,and other relevant
            details
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Reasons
