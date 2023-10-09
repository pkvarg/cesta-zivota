import React from 'react'

const Gdpr = ({ language, content }) => {
  return (
    <div className='text-white'>
      <h1 className='text-center text-[27.5px] lg:text-[25px] my-16 lg:my-4'>
        GDPR
      </h1>
      <div className='text-[25px] lg:text-[22.5px] mt-12 lg:mt-8 mx-4 lg:mx-2'>
        <p className='text-center'>{content.gdpr1}</p>
        <p className='text-center'>{content.gdpr2}</p>
      </div>
    </div>
  )
}

export default Gdpr
