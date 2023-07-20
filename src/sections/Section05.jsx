import React from 'react'
import Footer from '../components/Footer'

const Section05 = () => {
  return (
    <div className='section5 text-[22.5px] lg:text-[27.5px] text-justify pt-[80px]'>
      <div className='mx-[5%]'>
        <p>
          Začni čítať{' '}
          <a className='underline' href='https://biblia.sk' target='_blank'>
            Bibliu
          </a>
          , ideálne ako prvé Evanjelium Jána a pravidelne navštevuj nejaké
          spoločenstvo, kde oslavujú Boha Otca, Ježiša a Svätého Ducha; nie
          Máriu ani Jehovu ani nikoho iného.
        </p>
        <div className='flex flex-col lg:flex-row gap-2 pt-4'>
          <p> Ak chceš viac, skús napríklad:</p>
          <a className='underline' href='https://hladamboha.sk' target='_blank'>
            hladamboha.sk,
          </a>
          <a
            className='underline'
            href='https://fireproduction.sk'
            target='_blank'
          >
            fireproduction.sk,
          </a>
          <p>alebo</p>
          <a className='underline' href='https://radio7.sk' target='_blank'>
            Rádio 7.
          </a>
        </div>
        <p className='pt-4'>
          Ja ostávam v anonymite, pretože nie je podstatné ma poznať. Podstatný
          je obsah. Prajem ti, aby si uveril pravde, ktorou je Božie Slovo a
          získal tak späť postavenie, ktoré ti patrí.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default Section05
