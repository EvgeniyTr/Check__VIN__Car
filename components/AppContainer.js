import Navbar from './Navbar'
import Form from './Form'
import Hero from './Hero'
import Reasons from './Reasons'
import SampleButton from './SampleButton'
import Footer from './Footer'
import { Lang } from '../context'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'

const AppContainer = ({ children }) => {
  const [lang, setLang] = useState('en')
  return (
    <Lang.Provider value={{ lang, setLang }}>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png" />
        <title>Top VIN number lookup!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
