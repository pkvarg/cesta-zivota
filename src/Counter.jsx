import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebaseConfig'

import { getDocs, collection } from 'firebase/firestore'

const Counter = () => {
  const navigate = useNavigate()
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
    <div className='section5 h-[100vh] text-[25px] p-10 flex flex-col gap-4'>
      <button
        onClick={getStats}
        className='border px-2 rounded-xl w-[20%] cursor-pointer'
      >
        Zobraziť počet návštev
      </button>
      {count > 0 && (
        <h1 className='text-[35px] ml-2'>Počet návštev: {count}</h1>
      )}

      <button
        onClick={() => navigate('/')}
        className='border px-2 rounded-xl w-[20%] cursor-pointer'
      >
        Späť na stránku
      </button>
    </div>
  )
}

export default Counter
