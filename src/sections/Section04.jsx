import React from 'react'
import Slider from '../components/Slider'

const Section04 = () => {
  return (
    <div className='section4'>
      <h3 className='text-[30px] !text-[#7b7a7d] pt-[75px] text-center'>
        Viac sa dočítaš v tejto 170-stranovej knihe, ktorá je zdarma.
      </h3>
      <div className='mx-[25px] p-[50px] flex items-center'>
        <img
          className='w-[25%] mr-[35px]'
          src='/src/assets/Img01.webp'
          alt='book title'
        />
        <Slider />
      </div>
      <h3 className='text-[25px] !text-[#7b7a7d] text-center'>
        Pýtaj si ju u Jimmyho alebo skús v niektorých kresťanských
        spoločenstvách.
      </h3>
    </div>
  )
}

export default Section04
