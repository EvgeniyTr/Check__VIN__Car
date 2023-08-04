import { useState, useEffect, useContext } from 'react'
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
import { Lang } from '../context'
import langData from '../locales/langs'
import { FaBarcode } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'

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
  const { lang, setLang } = useContext(Lang)
  const { form, errors, successes } = langData[lang]
  const { values, isLoading, error, success, validationError, isUrlLoading } =
    state

  useEffect(() => {
    if (validationError)
      toast({
        title: errors['validation'],
        description: validationError,
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true
      })
  }, [toast, validationError, errors])

  useEffect(() => {
    if (success)
      toast({
        title: successes['found'],
        description: success,
        status: 'success',
        duration: 3000,
        position: 'top',
        isClosable: true
      })
  }, [toast, success, successes])

  useEffect(() => {
    if (error)
      toast({
        title: errors['notFoundTitle'],
        description: error,
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true
      })
  }, [toast, error, errors])

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
        setError(errors['payment'])
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
        if (!reportStatus.reportFound) setError(errors['notFound'])
        else
          setState((prev) => ({
            ...prev,
            success: successes['found']
          }))
        setLoading(false)
      } catch (err) {
        setError(errors['server'])
        setLoading(false)
      }
    }

    if (validateMail(state.values.email) && validateVincode(state.values.vin)) {
      await getReportStatus(vendor, state.values.vin, state.values.email)
    } else {
      setValidationError(errors['setValidation'])
      setLoading(false)
    }
  }
  return (
    <>
      <Heading
        color="#504A4B"
        fontWeight="semibold"
        display={'flex'}
        mt={'30px'}
        mb={'30px'}
        justifyContent={'center'}
        alignItems={'center'}
        fontSize={{ base: '20px', md: '22px', lg: '24px' }}
      >
        {form['form-top']}
      </Heading>

      <Container
        maxW={['90%', '400px', '550px']}
        backgroundColor="white"
        color="black"
        borderRadius="5px"
        pt="10px"
        pb="2rem"
        boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
      >
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
              {form['form-payment']}
            </Button>
          </HStack>
        ) : null}

        <HStack m={'10'} justifyContent="center">
          <Button
            w="160px"
            h="70px"
            onClick={handleCarfax}
            border="1px"
            backgroundColor={vendor === 'carfax' ? '#FFF5F5' : '#F1F5FB'}
            borderColor={vendor === 'carfax' ? 'red' : 'white'}
            display="flex"
            flexDirection="column"
          >
            <Text mt="10px" textColor="blue.600" w="full" textAlign="center">
              {form['form-carfax']}
            </Text>
            <Text mt="5px" color="red.300" textAlign="justify">
              20₾
            </Text>
          </Button>
          <Button
            h="70px"
            w="160px"
            border="1px"
            onClick={handleAutocheck}
            backgroundColor={vendor === 'autocheck' ? '#FFF5F5' : '#F1F5FB'}
            borderColor={vendor === 'autocheck' ? 'red' : 'white'}
            display="flex"
            flexDirection="column"
          >
            <Text mt="10px" textColor="blue.600" w="full" textAlign="center">
              {form['form-carcheck']}
            </Text>
            <Text mt="5px" color="red.300" textAlign="justify">
              20₾
            </Text>
          </Button>
        </HStack>
        <FormControl
          alignItems="center"
          fontSize="25px"
          display="flex"
          isRequired
          isInvalid={touched.vin && !values.vin}
          mb={5}
        >
          <FaBarcode />
          <Input
            type="text"
            name="vin"
            placeholder="VIN"
            errorBorderColor="red.300"
            _placeholder={{ color: 'gray' }}
            variant="flushed"
            outline="none"
            ml="5px"
            mr="5px"
            value={values.vin}
            onChange={handleChange}
            onBlur={onBlur}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
          display="flex"
          alignItems="center"
          fontSize="25px"
        >
          <CiMail />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            _placeholder={{ color: 'gray' }}
            errorBorderColor="red.300"
            color="black"
            variant="flushed"
            ml="5px"
            mr="5px"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
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
          {form['form-check']}
        </Button>
      </Container>
    </>
  )
}
