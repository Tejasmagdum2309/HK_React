import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { countState } from '../../store/atoms/count';

const Countval = () => {

      const count  = useRecoilValue(countState);
    
  return (
    <div>        <div>SimpleCount : {count}</div>
</div>

  )
}

export default Countval