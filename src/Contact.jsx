import React from 'react'
import ContactForm from './components/ContactForm'
import { useStateContext } from './context/StateContext'

const Contact = () => {
  // TODO: PIC-API-BOTS CESTA, EMAIL.JS, copy .env to Hostinger
  const { language } = useStateContext()
  return (
    <div className='hero'>
      <div className='mx-4 lg:mx-16'>
        <ContactForm language={language} />
      </div>
    </div>
  )
}

export default Contact
