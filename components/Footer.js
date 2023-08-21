import React, { useContext } from 'react'
import { Box, Link, Image, Text } from '@chakra-ui/react'
import { Lang } from '../context'
import data from '../locales/langs'

const Footer = () => {
  const { lang, setLang } = useContext(Lang)
  let { title } = data[lang]
  return (
    <>
      <Box
        mt="auto"
        h={['150px', '250px', '250px']}
        bg="#2D5697"
        maxW="full"
        display="flex"
        flexDirection="row"
      >
        <Box
          w="1400px"
          m="auto"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box maxW="300px" m="auto 0">
            <Box display="flex" position="relative">
              <Image
                src="/circle.svg"
                position="absolute"
                top={['-40px', '-24px', '-24px']}
                left={['20px', '36px', '36px']}
                h={['35px', '65px', '65px']}
              />
              <Text
                ml={['30px', '51px', '51px']}
                color="white"
                fontSize={['12px', '16px', '16px']}
                mt={['-1.8rem', '0', '0']}
              >
                {title}
              </Text>
            </Box>
          </Box>
          <Box
            ml={['50px', '4rem', '4rem']}
            display="flex"
            flexDirection="column"
            h="70px"
          >
            <Box display="flex" alignItems="space-evenly" h="80%">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 496 512"
                fill="white"
              >
                <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
              </svg>
              <Link
                href="/"
                fontSize={{ base: '14px', md: '15px', lg: '16px' }}
                ml="10px"
                textColor="white"
              >
                {' '}
                @companyname
              </Link>
            </Box>

            <Box display="flex" alignItems="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
                fill="white"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <Link
                href="/"
                fontSize={{ base: '14px', md: '15px', lg: '16px' }}
                ml="10px"
                textColor="white"
                mt="5px"
              >
                CompanyEmail@gmail.com
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        color="white"
        bg="#2D5697"
        pb="10px"
        display="flex"
        flexDirection="row"
        fontSize="13px"
      >
        <Text
          textAlign={['center', 'end', 'end']}
          w="50%"
          mr={['5px', '40px', '40px']}
        >
          copyright
        </Text>
        <Text textAlign={['center', 'start', 'start']} w="50%">
          all rights reserved
        </Text>
      </Box>
    </>
  )
}

export default Footer
