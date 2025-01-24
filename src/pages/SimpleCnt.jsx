import React, { useEffect, useState } from 'react'
import useInput from '../customHook/useInput.jsx';

const SimpleCnt = () => {
//    const [cnt,setCnt] = useState(0);

//    console.log('1');
   
//    useEffect(() => {    
//       console.log("rendered-useEffect SimpleCnt" , cnt);
//       setCnt(cnt + 1);
//    }, [cnt])

const [name,handleNameChange] = useInput('');



   console.log('1');


  return (
    <>
    <h1 className = 'text-center p-6 text-bold text-4xl'>chalo shuru kartehe</h1>

    <input type="text" placeholder="Enter Name" className="border md:border-2 border-gray-400 w-1/2" value={name} onChange={(e) => { handleNameChange(e); }} ></input>

    <p>{name}</p>
    </>
  )
}

export default SimpleCnt