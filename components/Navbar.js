import React, { useContext } from 'react'
import { Box, Link, Select } from '@chakra-ui/react'
import { Lang } from '../context'
import data from '../locales/langs'

const Navbar = () => {
  const { lang, setLang } = useContext(Lang)
  let { title } = data[lang]

  const handleChange = (e) => {
    setLang(e.target.value)
  }
  return (
    <Box textColor="white" display="flex" w={'full'} h="100px" bg={'blue.400'}>
      <Box
        display="flex"
        justifyContent={'space-between'}
        alignItems="center"
        w={'100%'}
      >
        <Box display="flex">
          <Link
            mt="40px"
            ml={'52px'}
            fontSize={'2xl'}
            href="/"
            textColor="white"
          >
            {title}
          </Link>
        </Box>
        <Box mt="40px" mr="52px">
          <Select
            onChange={(e) => handleChange(e)}
            display={'flex'}
            justifyContent="flex-end"
            width="fit-content"
            cursor="pointer"
          >
            <option value="en">EN</option>
            <option value="ka">KA</option>
          </Select>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
