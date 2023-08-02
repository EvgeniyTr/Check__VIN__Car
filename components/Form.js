import { useState, useEffect } from 'react'
import { validateMail, validateVincode } from '../lib/validate'
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  Text,
  useToast,
  Button
} from '@chakra-ui/react'

const initValues = {
  vin: '',
  email: ''
}

const initState = { values: initValues }

export default function Form() {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [vendor, setVendor] = useState('carfax')
  const [touched, setTouched] = useState({})
  const { values, isLoading, error, success, validationError, isUrlLoading } =
    state

  useEffect(() => {
    if (validationError)
      toast({
        title: 'Validation error',
        description: validationError,
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true
      })
  }, [toast, validationError])

  useEffect(() => {
    if (success)
      toast({
        title: 'Report found',
        description: success,
        status: 'success',
        duration: 3000,
        position: 'top',
        isClosable: true
      })
  }, [toast, success])

  useEffect(() => {
    if (error)
      toast({
        title: 'Report not found',
        description: error,
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true
      })
  }, [toast, error])

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }))

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))
  }

  const setLoading = (loadingState) => {
    setState((prev) => ({
      ...prev,
      isLoading: loadingState
    }))
  }

  const setError = (errorText = '') => {
    setState((prev) => ({
      ...prev,
      error: errorText
    }))
  }

  const setValidationError = (errorText = '') => {
    setState((prev) => ({
      ...prev,
      validationError: errorText
    }))
  }

  const setSeccuss = (text = '') => {
    setState((prev) => ({
      ...prev,
      success: text
    }))
  }

  const handleCarfax = () => {
    setVendor('carfax')
  }

  const handleAutocheck = () => {
    setVendor('autocheck')
  }

  const handleTransaction = async () => {
    setState((prev) => ({
      ...prev,
      isUrlLoading: true
    }))
    const getTransactionURL = async () => {
      try {
        const res = await fetch('/api/checkout', {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            vendor,
            vincode: values.vin,
            mail: values.email
          })
        })
        const data = await res.json()
        window.location.replace(data.response.transactionUrl)
      } catch (err) {
        setError('Could not access payment! Try again')
      }
    }

    await getTransactionURL()
  }

  const onSubmit = async () => {
    setLoading(true)
    setError()
    setSeccuss()
    setValidationError()

    const getReportStatus = async (vend, vincode, email) => {
      try {
        const res = await fetch(
          `/api/car-info?vendor=${vend}&vincode=${vincode}&receiver=${email}`
        )
        const reportStatus = await res.json()
        if (!reportStatus.reportFound)
          setError('Could not find report for that vincode')
        else
          setState((prev) => ({
            ...prev,
            success: 'report found!'
          }))
        setLoading(false)
      } catch (err) {
        setError('Could not access server. Please try again')
        setLoading(false)
      }
    }

    if (validateMail(state.values.email) && validateVincode(state.values.vin)) {
      await getReportStatus(vendor, state.values.vin, state.values.email)
    } else {
      setValidationError('Check vincode and email')
      setLoading(false)
    }
  }
  return (
    <Container>
      <Heading
        display={'flex'}
        mt={'10%'}
        justifyContent={'center'}
        alignItems={'center'}
        fontSize={{ base: '22px', md: '24px', lg: '26px' }}
      >
        top VIN number lookup
      </Heading>
      {success && !error ? (
        <HStack m={'10'} justifyContent="center">
          <Button
            size="md"
            variant="solid"
            w="full"
            colorScheme="blue"
            onClick={handleTransaction}
            isLoading={isUrlLoading}
          >
            Proceed to checkout
          </Button>
        </HStack>
      ) : null}

      <HStack m={'10'} justifyContent="center">
        <Button
          w="160px"
          h="60px"
          onClick={handleCarfax}
          border="1px"
          backgroundColor={vendor === 'carfax' ? '#FFF5F5' : '#F1F5FB'}
          borderColor={vendor === 'carfax' ? 'red' : 'white'}
        >
          Carfax
          <Text ml={'10px'} color="red.300">
            20₾
          </Text>
        </Button>
        <Button
          h="60px"
          w="160px"
          border="1px"
          onClick={handleAutocheck}
          backgroundColor={vendor === 'autocheck' ? '#FFF5F5' : '#F1F5FB'}
          borderColor={vendor === 'autocheck' ? 'red' : 'white'}
        >
          Autocheck
          <Text ml={'25px'} color={'red.300'}>
            20₾
          </Text>
        </Button>
      </HStack>
      <FormControl isRequired isInvalid={touched.vin && !values.vin} mb={5}>
        <FormLabel>VIN</FormLabel>
        <Input
          type="text"
          name="vin"
          placeholder="VIN"
          errorBorderColor="red.300"
          value={values.vin}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
        variant="outline"
        w={'70%'}
        ml="15%"
        colorScheme="blue"
        disabled={!values.vin || !values.email}
        onClick={onSubmit}
        isLoading={isLoading}
      >
        CHECK
      </Button>
    </Container>
  )
}
