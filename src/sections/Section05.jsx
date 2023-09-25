import React from 'react'
import Footer from '../components/Footer'
import SliderTract from '../components/SliderTract'

const Section05 = () => {
  return (
    <div className='section5 text-[20px] lg:text-[22.5px] text-justify pt-[80px]'>
      <div className='mx-[5%]'>
        <p>
          Daj sa pokrstiť v mene Ježiša Krista na odpustenie hriechov, začni sa
          každodenne modliť{' '}
          <a
            className='underline'
            href='https://www.rhemabooks.org/sk/free-christian-books/basic-elements-of-the-christian-life-2/'
            target='_blank'
          >
            vlastnými slovami
          </a>{' '}
          , aby si udržiaval živý vzťah s Bohom a čítať{' '}
          <a className='underline' href='https://biblia.sk' target='_blank'>
            Bibliu
          </a>
          , aby si bol plný Jeho Slova a podľa Neho žil. Ideálne ako prvé
          Evanjelium Jána a pravidelne navštevuj nejaké spoločenstvo, kde
          oslavujú Boha Otca, Ježiša a Svätého Ducha.
        </p>
        <p className='text-justify pt-4'>
          Prečo nestačí len uveriť a ďalej to neriešiť? Pretože viera bez
          osobného vzťahu s Ježišom je len mŕtve náboženstvo a viera bez
          poslušnosti Božiemu Slovu je pokrytectvom. Takú falošnú vieru Boh
          neprijme a odsúdi. Mŕtva viera ťa nespasí! Pánom ti je ten, koho
          poslúchaš.
          <span className='italic'>
            {' '}
            Kto hovorí: Poznám Ho, ale nezachováva Jeho prikázania, je klamár a
            niet v ňom pravdy. Ak niekto miluje svet (žiadosť tela, žiadosť očí,
            pýchu života), nieto v ňom lásky k Otcovi.{' '}
          </span>
          <span className='text-[17.5px]'> Prvý Jánov 2:4,15 </span>
          Viac v tejto audio knihe{' '}
          <a
            className='underline'
            href='https://app.messengerx.com/sk-SK/listen/1DB0tFrLRez7blmTBmVSlZ/qo21vqS1ZFttSJR05ydGL_s3AudioAsset.mp3'
            target='_blank'
          >
            Ži s perspektívou večnosti
          </a>
          , 5. kapitola.
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
        <SliderTract />

        <p>
          {' '}
          Sú všetky cirkevné tradície podložené Božím Slovom? Viac na{' '}
          <a
            href='https://katolickaviera.sk'
            target='_blank'
            className='underline'
          >
            {' '}
            katolickaviera.sk.
          </a>
          {'  '}
          Hlásajú svedkovia Jehovovi evanjelium, aké hlásali apoštoli? Viac na{' '}
          <a href='https://svedkovia.sk' target='_blank' className='underline'>
            svedkovia.sk.
          </a>{' '}
          Je emocionálne uspokojenie cesta k pravému šťastiu človeka? Viac na{' '}
          <a href='https://duhovyrod.sk' target='_blank' className='underline'>
            duhovyrod.sk.
          </a>
        </p>

        <p className='text-center pt-8 lg:pt-8'>
          Prajem ti, aby si uveril pravde, ktorou je Božie Slovo a získal tak
          späť postavenie, ktoré ti patrí.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default Section05
