import React from 'react'
import Footer from '../components/Footer'

const Section05 = () => {
  return (
    <div className='section5 text-[20px] lg:text-[22.5px] text-justify pt-[80px]'>
      <div className='mx-[5%]'>
        <p>
          Daj sa pokrstiť v mene Ježiša Krista na odpustenie hriechov, začni sa
          každodenne modliť, aby si udržiaval živý vzťah s Bohom a čítať{' '}
          <a className='underline' href='https://biblia.sk' target='_blank'>
            Bibliu
          </a>
          , aby si bol plný Jeho Slova a podľa Neho žil. Ideálne ako prvé
          Evanjelium Jána a pravidelne navštevuj nejaké spoločenstvo, kde
          oslavujú Boha Otca, Ježiša a Svätého Ducha; nie Jehovu, viac na{' '}
          <a href='https://svedkovia.sk' target='_blank' className='underline'>
            svedkovia.sk
          </a>
          . K Márii, matke Ježišovej, pozri{' '}
          <a
            href='https://katolickaviera.sk'
            target='_blank'
            className='underline'
          >
            katolickaviera.sk
          </a>
          .
        </p>
        <p className='pt-4'>
          Prajem ti, aby si uveril pravde, ktorou je Božie Slovo a získal tak
          späť postavenie, ktoré ti patrí.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default Section05
