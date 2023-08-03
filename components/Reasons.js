import React, { useContext } from 'react'
import { List, ListItem, ListIcon, Box, Heading, Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Lang } from '../context'
import data from '../locales/langs'

const Reasons = () => {
  const { lang, setLang } = useContext(Lang)
  let { reason } = data[lang]
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
          fontSize={{ base: '24px', md: '26px', lg: '28px' }}
        >
          {reason['reasons']}
          <Box bg="blue.500" h="3px" m="0 auto" w={['90%', '90%', '50%']}></Box>
        </Heading>
      </Box>
      <Box display="flex" justifyContent="center" ml="10%">
        <List space={3}>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['identify']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['accident']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['history']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['stolen']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['value']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['lien']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['odemeter']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['rental']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['disaster']}
          </ListItem>
          <ListItem fontSize={{ base: '15px', md: '18px', lg: '20px' }}>
            <ListIcon border="50%" as={CheckIcon} color="green.500" />
            {reason['recall']}
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
          fontSize={{ base: '24px', md: '26px', lg: '28px' }}
        >
          {reason['why']}
        </Heading>
        <Box bg="blue.500" h="3px" w={['80%', '90%', '40%']} m="0 auto"></Box>
        <Box display="flex" justifyContent="center" mt="1.5%">
          <Text
            disply="flex"
            w={['80%', '90%', '40%']}
            fontSize={{ base: '17px', md: '18px', lg: '20px' }}
          >
            {reason['why-text']}
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
          fontSize={{ base: '24px', md: '26px', lg: '28px' }}
        >
          {reason['fast']}
        </Heading>
        <Box bg="blue.500" h="3px" w={['80%', '90%', '40%']} m="0 auto"></Box>
        <Box display="flex" justifyContent="center" mt="1.5%">
          <Text
            disply="flex"
            w={['80%', '90%', '40%']}
            fontSize={{ base: '17px', md: '18px', lg: '20px' }}
          >
            {reason['fast-text']}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Reasons
