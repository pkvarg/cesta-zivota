import React, { useState } from 'react'
import Section01 from './sections/Section01'
import Section02 from './sections/Section02'
import Section03 from './sections/Section03'
import Section04 from './sections/Section04'
import Section05 from './sections/Section05'
import CookieConsent from 'react-cookie-consent'
import axios from 'axios'
import { db } from '../firebaseConfig'

import { getDocs, collection, updateDoc, doc } from 'firebase/firestore'

const Home = () => {
  const [cookieAccept, setCookieAccept] = useState(false)
  const countCollectionRef = collection(db, 'cestazivota')

  // const increaseVisitorsCount = async () => {
  //   const data = await getDocs(countCollectionRef)
  //   const id = 'LqiqMQmwWKWMvsS02wod'
  //   const countInDb =
  //     data.docs[0]._document.data.value.mapValue.fields.count.integerValue
  //   const increaseCount = Number(countInDb) + Number(1)
  //   const docRef = doc(db, 'cestazivota', id)
  //   updateDoc(docRef, {
  //     count: increaseCount,
  //   })
  // }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsCount = async () => {
    const { data } = await axios.put(
      `https://pictusweb.online/api/visitors/cesta/increase`,
      // `http://localhost:2000/api/visitors/cesta/increase`,
      config
    )
    console.log('vstrs:', data)
  }

  return (
    <>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <CookieConsent
        location='bottom'
        style={{
          background: '#782777',
          color: '#d7cde6',
          fontSize: '22.5px',
          textAlign: 'justify',
        }}
        buttonStyle={{
          background: '#1d9f2f',
          color: '#fff',
          fontSize: '22.5px',
        }}
        buttonText='Pokračovať'
        expires={365}
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitorsCount()
        }}
      >
        Táto stránka nezhromažďuje žiadne údaje
      </CookieConsent>
    </>
  )
}

export default Home
