import React from 'react'
import Slider from '../components/Slider'

const Section04 = () => {
  return (
    <div className='no-hero'>
      <h3 className='text-[30px] pt-[75px] text-center'>
        Viac sa dočítaš v tejto 170-stranovej knihe, ktorá je zdarma.
      </h3>
      <div className='mx-[25px] p-[50px] flex items-center gap-8'>
        <img className='w-[30%]' src='/src/assets/Img01.JPG' alt='book title' />
        <Slider />
      </div>
      <h3 className='text-[30px] pt-[75px] text-center'>
        Pýtaj si ju u Jimmyho alebo skús v niektorých kresťanských
        spoločenstvách.
      </h3>
      <div className='mt-[5%] pb-[10%]'></div>
    </div>
  )
}

export default Section04
