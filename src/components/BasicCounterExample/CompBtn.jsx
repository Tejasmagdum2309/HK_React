import React from 'react'
import { countState } from '../../store/atoms/count';
import { useRecoilState, useSetRecoilState } from 'recoil';

const CompBtn = () => {
  
    const setCount = useSetRecoilState(countState);

   console.log('rendered-compBtn');
  return (
    <div> <button className='btn' onClick={() => setCount(count => count + 1)}>increment</button>
        <button onClick={() => setCount( count => count - 1)}>decrement</button></div>
  )
}

export default CompBtn