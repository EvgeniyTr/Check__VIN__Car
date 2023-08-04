import Navbar from './Navbar'
import Form from './Form'
import Hero from './Hero'
import Reasons from './Reasons'
import SampleButton from './SampleButton'
import Footer from './Footer'
import { Lang } from '../context'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'

const AppContainer = ({ children }) => {
  const [lang, setLang] = useState('en')
  return (
    <Lang.Provider value={{ lang, setLang }}>
      <Box backgroundColor="#F1F4FD">
        <Navbar />
        <Form />
        <Hero />
        <Reasons />
        <SampleButton />
        <Footer />
        {children}
      </Box>
    </Lang.Provider>
  )
}

export default AppContainer
