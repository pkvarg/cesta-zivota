import React, { useState } from 'react'

const Slider = () => {
  const image2 = '/Img02.webp'

  const image3 = '/Img03.webp'
  const image4 = '/Img04.webp'
  const image5 = '/Img05.webp'

  const images = [image2, image3, image4, image5]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className='relative'>
      <div className='flex'>
        <button onClick={prevImage} className='text-[55px]'>
          &lt;
        </button>
        <button
          onClick={nextImage}
          className='absolute top-1/2 transform -translate-y-1/2 right-4 text-[55px]'
        >
          &gt;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='mx-auto w-[65%]'
        />
      </div>
    </div>
  )
}

export default Slider
