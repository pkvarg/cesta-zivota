import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'

const Section03 = ({ language }) => {
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
    <div className='section3 px-[5%]'>
      <div className='text-[20px] lg:text-[22.5px] text-justify'>
        <p>
          {content.s3Text1}
          {/* Ak sa rozhodneš ignorovať Jeho obeť a šancu na záchranu, budeš
          odsúdený. */}{' '}
          <span className='italic'>
            {content.s3Verse1}
            {/* Kto však neposlúcha Syna, neuvidí život, ale hnev Boží zostáva na
            ňom. */}
          </span>{' '}
          <span className='text-[17.5px]'>
            {content.s3Ref1}
            {/* Ján 3:36 */}
          </span>{' '}
          <span className='italic'>
            {content.s3Verse2}
            {/* Kto neverí, už je odsúdený, pretože neuveril v meno jednorodeného
            Syna Božieho. */}
          </span>{' '}
          <span className='text-[17.5px]'>{content.s3Ref2}</span>
        </p>
      </div>
      <div className='text-[20px] lg:text-[22.5px] text-justify mt-6'>
        <p>
          {content.s3Text2}
          {/* Ver v Pána Ježiša Krista a budeš spasený! */}{' '}
          <span className='italic'>
            {content.s3Verse3}
            {/* Kto verí v Syna, má večný život. */}{' '}
            <span className='text-[17.5px]'>
              {content.s3Ref3} {/* Ján 3:36 */}
            </span>
            {content.s3Verse4}
            {/* Kto verí v Neho,
            nebude súdený.  */}
            <span className='text-[17.5px]'>
              {' '}
              {content.s3Ref4} {/* Ján 3:18 */}
            </span>
          </span>
          <span className='italic'>
            {' '}
            {content.s3Verse5}
            {/* Ak ústami vyznávaš Pána Ježiša a v srdci veríš, že Ho Boh vzkriesil
            z mŕtvych, budeš spasený; lebo srdcom veríme na spravodlivosť a
            ústami vyznávame na spasenie. */}{' '}
            <span className='text-[17.5px]'>
              {content.s3Ref5}
              {/* Rimanom 10:9-10 */}
            </span>
          </span>
        </p>
      </div>
      <div className='text-[20px] lg:text-[22.5px] text-justify mt-6'>
        <p>
          {content.s3Text3}
          {/* Evanjelium neznamená “Uver, inak pôjdeš do pekla!”, ale ”Uver, lebo
          tam smeruješ!” */}{' '}
          <span className='italic'>
            {content.s3Verse6}
            {/* Povedz im: Akože žijem - znie výrok Hospodina, Pána - nemám záľubu v
            smrti bezbožného, ale v tom, že sa bezbožný odvráti od svojho
            spôsobu života a bude žiť. */}{' '}
          </span>
          <span className='text-[17.5px] italic'>
            {content.s3Ref6}
            {/* Ezechiel 33:11 */}
          </span>
        </p>
      </div>
      <div className='text-[20px] lg:text-[22.5px] text-justify mt-6'>
        <p>
          {content.s3Text4}
          {/* Kajaj sa zo svojich hriechov a úprimne zo srdca ústami vyznaj:
          “Nebeský Otče, ďakujem Ti, že si poslal Svojho Syna, aby niesol trest
          za moje hriechy. Verím, že Ježiš zomrel na kríži a tretí deň vstal z
          mŕtvych a žije. Vzdávam sa doterajšieho hriešneho spôsobu života.
          Prosím, odpusť mi všetky hriechy skrze krv Ježiša Krista. Ďakujem Ti,
          že si ma očistil. Ježišu, vyznávam Ťa ako môjho Pána a Spasiteľa.
          Prosím, meň moje srdce a formuj môj charakter. Amen.”{' '} */}
        </p>
      </div>
    </div>
  )
}

export default Section03
