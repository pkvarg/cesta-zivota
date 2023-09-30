import React, { useState, useEffect } from 'react'
import Translation from '../Data.json'
import Footer from '../components/Footer'
import SliderTract from '../components/SliderTract'
import SliderTractEn from '../components/SliderTractEn'

const Section05 = ({ language }) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else {
      setContent(Translation.english)
    }
  })

  return (
    <div className='section5 text-[20px] lg:text-[22.5px] text-justify pt-[80px]'>
      <div className='mx-[5%]'>
        <p>
          {content.s5Text1}{' '}
          {/* Daj sa pokrstiť v mene Ježiša Krista na odpustenie hriechov, začni sa
          každodenne modliť{' '} */}
          {language === 'slovak' ? (
            <a
              className='underline'
              href='https://www.rhemabooks.org/sk/free-christian-books/basic-elements-of-the-christian-life-2/'
              target='_blank'
            >
              {content.s5Anchor1}
              {/* vlastnými slovami */}
            </a>
          ) : (
            <a
              className='underline'
              href='https://www.rhemabooks.org/en/free-christian-books/basic-elements-of-the-christian-life-2/'
              target='_blank'
            >
              {content.s5Anchor1}
              {/* vlastnými slovami */}
            </a>
          )}{' '}
          {content.s5Text2}{' '}
          {/* , aby si udržiaval živý vzťah s Bohom a čítať{' '} */}
          {language === 'slovak' ? (
            <a className='underline' href='https://biblia.sk' target='_blank'>
              {content.s5Anchor2}
              {/* Bibliu */}
            </a>
          ) : (
            <a
              className='underline'
              href='https://www.bible.com/bible/1588/JHN.1.AMP'
              target='_blank'
            >
              {content.s5Anchor2}
              {/* Bibliu */}
            </a>
          )}{' '}
          {content.s5Text3}
          {/* , aby si bol plný Jeho Slova a podľa Neho žil. A pravidelne navštevuj
          nejaké spoločenstvo, kde oslavujú Boha Otca, Ježiša a Svätého Ducha. */}
        </p>
        <p className='text-justify pt-4'>
          {content.s5Text4}
          {/* Prečo nestačí len formálne uveriť a ďalej to neriešiť? Pretože viera
          bez osobného vzťahu s Ježišom a bez poslušnosti Božiemu Slovu je
          pokrytectvom. Takú falošnú vieru Boh neprijme a odsúdi. Mŕtva viera ťa
          nespasí! Pánom ti je ten, koho poslúchaš. */}
          <span className='italic'>
            {' '}
            {content.s5Verse1}{' '}
            {/* Kto hovorí: Poznám Ho, ale nezachováva Jeho prikázania, je klamár a
            niet v ňom pravdy. Ak niekto miluje svet (žiadosť tela, žiadosť očí,
            pýchu života), nieto v ňom lásky k Otcovi.{' '} */}
          </span>
          <span className='text-[17.5px]'>
            {' '}
            {content.s5Ref1} {/* Prvý Jánov 2:4,15 */}
          </span>
          {content.s5Text5} {/* Viac v tejto audio knihe{' '} */}
          {language === 'slovak' ? (
            <a
              className='underline'
              href='https://app.messengerx.com/sk-SK/listen/1DB0tFrLRez7blmTBmVSlZ/qo21vqS1ZFttSJR05ydGL_s3AudioAsset.mp3'
              target='_blank'
            >
              {content.s5Anchor3}
              {/* Ži s perspektívou večnosti */}
            </a>
          ) : (
            <a
              className='underline'
              href='https://app.messengerx.com/en-US/listen/1DB0tFrLRez7blmTBmVSlZ/2EmIAHWSQhehq3XvBHF7vs_s3AudioAsset.mp3'
              target='_blank'
            >
              {content.s5Anchor3}
              {/* Ži s perspektívou večnosti */}
            </a>
          )}
          <span className='text-[15px]'>
            {' '}
            {content.s5Text6}
            {/* 5. kapitola. */}
          </span>
        </p>
        {/* <p className='pt-4 text-center'>
          Viac v tejto audio knihe{' '}
          <a
            className='underline'
            href='https://app.messengerx.com/sk-SK/listen/1DB0tFrLRez7blmTBmVSlZ/qo21vqS1ZFttSJR05ydGL_s3AudioAsset.mp3'
            target='_blank'
          >
            Ži s perspektívou večnosti
          </a>
          , 5. kapitola.
        </p> */}
        {language === 'slovak' ? <SliderTract /> : <SliderTractEn />}

        <p>
          {' '}
          {content.s5Text7}{' '}
          {/* Sú všetky cirkevné tradície podložené Božím Slovom? Viac na{' '} */}
          <a
            href='https://katolickaviera.sk'
            target='_blank'
            className='underline'
          >
            {' '}
            {content.s5Anchor4}
            {/* katolickaviera.sk. */}
          </a>
          {'  '}
          {content.s5Text8}{' '}
          {/* Hlásajú svedkovia Jehovovi evanjelium, aké hlásali apoštoli? Viac na{' '} */}
          <a href='https://svedkovia.sk' target='_blank' className='underline'>
            {content.s5Anchor5}
            {/* svedkovia.sk. */}
          </a>{' '}
          {content.s5Text9}
          {/* Je emocionálne uspokojenie cesta k pravému šťastiu človeka? Viac na{' '} */}
          <a href='https://duhovyrod.sk' target='_blank' className='underline'>
            {' '}
            {content.s5Anchor6}
            {/* duhovyrod.sk. */}
          </a>
        </p>

        <p className='text-center pt-8 lg:pt-8'>
          {content.s5Text10}
          {/* Prajem ti, aby si uveril pravde, ktorou je Božie Slovo a získal tak
          späť postavenie, ktoré ti patrí. */}
        </p>
      </div>

      <Footer language={language} />
    </div>
  )
}

export default Section05
