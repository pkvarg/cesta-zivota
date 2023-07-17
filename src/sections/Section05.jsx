import React from 'react'
import Footer from '../components/Footer'

const Section05 = () => {
  return (
    <>
      <div className='text-[25px] text-justify pt-8 mx-[5%]'>
        <p>
          Začni čítať{' '}
          <a className='underline' href='https://biblia.sk' target='_blank'>
            Bibliu
          </a>
          , ideálne ako prvé Evanjelium Jána a pravidelne navštevuj nejaké
          spoločenstvo, kde oslavujú Boha Otca, Ježiša a Svätého Ducha; nie
          Máriu ani Jehovu ani nikoho iného.
        </p>
      </div>
      <div className='text-[25px] text-justify pt-8 mx-[5%]'>
        <div className='flex gap-2'>
          <p> Ak chceš viac, skús napríklad</p>
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
            Rádio 7
          </a>
        </div>
        <p className='pt-8'>
          Ja ostávam v anonymite, pretože nie je podstatné ma poznať. Podstatný
          je obsah. Prajem ti, aby si uveril pravde, ktorou je Božie Slovo a
          získal tak späť postavenie, ktoré ti patrí.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Section05
