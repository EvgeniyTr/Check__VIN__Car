import Navbar from './Navbar'
import Form from './Form'
import Hero from './Hero'
import Reasons from './Reasons'
import SampleButton from './SampleButton'
import Footer from './Footer'
import { Lang } from '../context'
import { useState } from 'react'

const AppContainer = ({ children }) => {
  const [lang, setLang] = useState('en')
  return (
    <Lang.Provider value={{ lang, setLang }}>
      <Navbar />
      <Form />
      <Hero />
      <Reasons />
      <SampleButton />
      <Footer />
      {children}
    </Lang.Provider>
  )
}

export default AppContainer
