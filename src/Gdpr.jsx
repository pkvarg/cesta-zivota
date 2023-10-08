import React, { useState, useEffect } from 'react'
import Translation from './Home.json'
import { useStateContext } from './context/StateContext'
import { useNavigate } from 'react-router-dom'

const Gdpr = () => {
  const [content, setContent] = useState({})
  const { language } = useStateContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'czech') {
      setContent(Translation.czech)
    }
  })

  return (
    <div className='section4 h-[100vh] text-white'>
      <button className='mt-2 ml-4 underline' onClick={() => navigate('/')}>
        {content.back}
      </button>
      <h1 className='text-center text-[27.5px] lg:text-[25px] my-4'>GDPR</h1>
      <div className='text-[25px] lg:text-[22.5px] mt-12 lg:mt-8 mx-4 lg:mx-2'>
        <p className='text-center'>{content.gdpr1}</p>
        <p className='text-center'>{content.gdpr2}</p>
      </div>
    </div>
  )
}

export default Gdpr
