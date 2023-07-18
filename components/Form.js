import { useState } from 'react'
import {Container, Heading,FormControl,FormLabel,Input,FormErrorMessage,HStack,Center,Box,Text,useToast,Button } from '@chakra-ui/react'

const initValues = {
    vin: "",
    email: "",
}

const initState = {values: initValues}

export default function Form() {
    const toast = useToast()
    const [state,setState] = useState(initState)
    const [touched,setTouched] = useState({})

    const {values,isLoading,error} = state

    const onBlur = ({target}) => setTouched((prev) => ({...prev,[target.name]:true}))

    const handleChange = ({target}) => {
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            }
        }))
    }

    const onSubmit = () => {
        setState((prev) => ({
            ...prev,
            isLoading:true
        }))
    }
  return (
    <Container>
    <Heading display={"flex"} mt={"10%"} justifyContent={"center"} alignItems={"center"} fontSize={{base:"24px", md: "35px", lg: "40px"}}>top VIN number lookup</Heading>

    <HStack m={"10"} justifyContent="center" > 
        <Center w="140px" h="60px" bg="white" border="2px" borderColor="red.300"  color="blue.500"  display="flex" justifyContent="space-between" alignItems="center" >
            <Box w="170px" ml="45px"  fontWeight={"bold"} as="span" fontSize={"lg"}>
            Carfax<br/> <Text ml={"10px"} color="red.300" >20₾</Text>
            </Box>
            </Center>
            <Center w="140px" h="60px" bg="white" color="blue.500" >
                <Box ml="25px" fontWeight={"bold"} as="span" fontSize={"lg"} w="160px">
                    Autocheck <br/> <Text ml={"25px"} color={"red.300"} > 20₾</Text> 
                </Box>
            </Center>
      

    </HStack>
    {error && (
        <Text color="red.300" my={4} fontSize="xl">
            {error}
        </Text>
    )}
    <FormControl isRequired isInvalid={touched.vin && !values.vin}  mb={5}>
      <FormLabel>VIN</FormLabel>
      <Input type="text" name="vin" placeholder="VIN" errorBorderColor="red.300" value={values.vin} onChange={handleChange} onBlur={onBlur}/>
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
  
    <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
      <FormLabel>Email</FormLabel>
      <Input type="email" name="email" placeholder="Email" errorBorderColor="red.300" value={values.email} onChange={handleChange} onBlur={onBlur} />
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
    <Button variant="outline" w={"70%"} ml="15%" colorScheme="blue" disabled={!values.vin || !values.email}
  onClick={onSubmit} isLoading={isLoading}> 
  CHECK
  </Button>
    </Container>
  )
}

