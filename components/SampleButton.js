import React, { useContext } from 'react'
import { Button, Box, Link } from '@chakra-ui/react'
import { Lang } from '../context'
import data from '../locales/langs'

const SampleButton = () => {
  const { lang, setLang } = useContext(Lang)
  let { sample } = data[lang]
  return (
    <Box display="flex" justifyContent="center" mt="50px">
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
        {sample}
      </Link>
    </Box>
  )
}

export default SampleButton
