import React, { useState } from 'react'
import { db } from '../firebaseConfig'

import { getDocs, collection } from 'firebase/firestore'

const Counter = () => {
  const [count, setCount] = useState(0)
  const countCollectionRef = collection(db, 'cestazivota')

  const getStats = async () => {
    const data = await getDocs(countCollectionRef)
    const id = 'LqiqMQmwWKWMvsS02wod'
    const countInDb =
      data.docs[0]._document.data.value.mapValue.fields.count.integerValue
    setCount(countInDb)
  }

  return (
    <div className='section5 h-[100vh] text-[25px] p-10'>
      <button onClick={getStats} className='border px-2 rounded-xl'>
        Zobraziť počet návštev
      </button>
      {count > 0 && (
        <h1 className='text-[35px] ml-2'>Počet návštev: {count}</h1>
      )}
    </div>
  )
}

export default Counter
