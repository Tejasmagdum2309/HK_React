import React, { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { countState, evenSelector } from '../../store/atoms/count'

const EvenCounterSayit = () => {
 
  const Count = useRecoilValue(countState);

  const isEven = useRecoilValue(evenSelector);
 
//    const isEven = useMemo(() => {
//      return Count % 2 === 1
//    }, Count)

   console.log('rendered-EvenCounterSayit');
  return (
    <>
    {
        isEven ?  <h1>Yes Its Odd</h1> : null 
    }
    </>
  )
}

export default EvenCounterSayit