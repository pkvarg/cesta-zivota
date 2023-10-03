import React, { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import { useStateContext } from './context/StateContext'
import Translation from './Home.json'

const Contact = () => {
  // TODO: PIC-API-BOTS CESTA, EMAIL.JS, copy .env to Hostinger
  const { language } = useStateContext()
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'czech') {
      setContent(Translation.czech)
    }
  }, [language])
  return (
    <div className='hero'>
      <a className='underline m-8 text-[25px]' href='/'>
        {content.back}
      </a>
      <div className='mx-4 lg:mx-16'>
        <ContactForm language={language} />
      </div>
    </div>
  )
}

export default Contact
