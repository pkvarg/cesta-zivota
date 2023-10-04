import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'
import Slider from '../components/Slider'
import SliderEn from '../components/SliderEn'

const Section04 = ({ language }) => {
  const [content, setContent] = useState({})

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
    <div className='section4'>
      <h3 className='text-[22.5px] lg:text-[25px] pt-[75px] text-center mx-[5%] lg:mx-0'>
        {content.s4Text1}
        {/* Viac sa dočítaš v tejto knihe. */}
      </h3>
      <div className='lg:mx-[25px] p-[50px] flex flex-col lg:flex-row items-center'>
        {/* <img
          className='w-[100%] lg:w-[25%] mb-8 lg:mb-0 lg:mr-[35px]'
          src='/IMG_01.webp'
          alt='book-title'
        /> */}
        {language === 'slovak' ? <Slider /> : <SliderEn />}
      </div>
      <h3 className='text-[20px] lg:text-[22.5px] text-center'>
        {language === 'slovak' && (
          <p>
            Vytlačenú bezplatnú knihu si pýtaj u{' '}
            <a className='underline' href='/contact'>
              mňa
              {/* {content.s4Text2} */}
            </a>
          </p>
        )}
        {language === 'english' && (
          <p>
            Ask{' '}
            <a className='underline' href='/contact'>
              me
            </a>{' '}
            for a printed free book
          </p>
        )}
        {/* Vytlačenú bezplatnú knihu si pýtaj u mňa na cestazivota@cestazivota.sk */}
      </h3>
    </div>
  )
}

export default Section04
