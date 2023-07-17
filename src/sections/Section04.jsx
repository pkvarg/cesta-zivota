import React from 'react'
import Slider from '../components/Slider'

const Section04 = () => {
  return (
    <div className='section4'>
      <h3 className='text-[30px] pt-[75px] text-center mx-[5%] lg:mx-0'>
        Viac sa dočítaš v tejto 170-stranovej knihe, ktorá je zdarma.
      </h3>
      <div className='lg:mx-[25px] p-[50px] flex flex-col lg:flex-row items-center'>
        <img
          className='w-[100%] lg:w-[25%] mb-8 lg:mb-0 lg:mr-[35px]'
          src='/Img01.webp'
          alt='book-title'
        />
        <Slider />
      </div>
      <h3 className='text-[25px] text-center'>
        Pýtaj si ju u Jimmyho alebo skús v niektorých kresťanských
        spoločenstvách.
      </h3>
    </div>
  )
}

export default Section04
