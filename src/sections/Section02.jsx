import React from 'react'
import YouTube from '../components/YouTube'

const Section02 = () => {
  return (
    <div className='section2 pt-[10%] lg:pt-[12%]'>
      <h3 className='text-[35px]  text-center'>
        Svedectvo môjho kamaráta Jimmyho
      </h3>
      <div className='mt-[5%] pb-[10%] lg:pb-[5%]'>
        <YouTube embedId='5CWjZWyBNjc' />
      </div>
    </div>
  )
}

export default Section02
