import React, { useContext } from 'react'
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Heading,
  Text,
  Container
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Lang } from '../context'
import data from '../locales/langs'

const Reasons = () => {
  const { lang, setLang } = useContext(Lang)
  let { reason } = data[lang]
  return (
    <Container
      textColor="black"
      maxW={['90%', '90%', '800px']}
      borderRadius="5px"
      backgroundColor="white"
      boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
      pb="50px"
      ml="auto"
      mr="auto"
      mt="50px"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Heading
          display="flex"
          justifyContent="center"
          flexDirection="column"
          mt={'5%'}
          w="100%"
          mb="10"
          alignItems={'center'}
          fontSize={{ base: '24px', md: '26px', lg: '28px' }}
          textAlign="center"
        >
          {reason['reasons']}
          <Box bg="blue.500" h="3px" m="0 auto" w={['90%', '90%', '65%']}></Box>
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

        <Box bg="blue.500" h="3px" m="0 auto" w={['65%', '40%', '35%']}></Box>
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

        <Box bg="blue.500" h="3px" w={['65%', '40%', '35%']} m="0 auto"></Box>
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
    </Container>
  )
}

export default Reasons
