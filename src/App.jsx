
import { RecoilRoot } from 'recoil';
import SimpleCount from './components/BasicCounterExample/SimpleCount.jsx'
import {CountProvider} from './context/CountContext.jsx'
import Todos from './pages/Todos.jsx';
import Navbar from './pages/Navbar.jsx';
import SimpleCnt from './pages/SimpleCnt.jsx';
import { Suspense, useEffect, useRef, useState } from 'react';
import TodosFamily from './pages/TodosFamily.jsx';
import useInterval from './customHook/useInterval.jsx';
import useDebounce from './customHook/useDebounce.jsx';

function App() {
  // const [count, setCount] = useState(0)

  console.log('rendered-app');

  return (
    <>
    {/* <SimpleCnt /> */}
      
  {/* <h1 className = 'text-center p-6'> chalo shuru kartehe</h1> */}
  {/* <RecoilRoot><Todos /></RecoilRoot> */}


   {/*  day 2 practice recoils => aton + seletos */}

      {/*  day 3 practice recoils => aton + seletos + Async data queries... */}

   {/* <RecoilRoot><Suspense fallback={<div>Loading...</div>}><Navbar /></Suspense></RecoilRoot> */}

    {/* <RecoilRoot><TodosFamily/></RecoilRoot> */}



   {/* {Day 4 : Custom Hooks} */}

    
    {/* <MyComp/> */}  
    {/* <Deb/> */}

    <Timer></Timer>
   

  
      
     

      {/* <RecoilRoot><SimpleCount /></RecoilRoot>   */}

      

      
    </>
  )
}

const MyComp = () => {

  const loading = useInterval(()=>{
         console.log("running in interval");
  },4000);

  return (
    <>{
    loading ? (<h1>loading.......</h1> ) :
    <h1>hi custome hook running in interval</h1>}
    </>
  )
}


const Deb = () => {

  const [ip, setIp] = useState("");

  const setCountDebounced = useDebounce(ip, 4000);

  useEffect(() => {
      console.log("calling api..........");
  }, [setCountDebounced]);

  return (
    <input placeholder="Enter Name" type="text" className='border md:border-2 border-gray-400 w-1/2' value={ip} onChange={(e) => {setIp(e.target.value)}} />
  )

}

const Timer = ()=>{

  const [time, setTime] = useState(0);
  const [start,setStart] = useState(false);

  const ref = useRef(null);

  // useEffect(() => {
  //   let interval ;
  //   if(start){
  //       interval = setInterval(() => {
  //       setTime(pre => pre+1);
  //    },1000);
  //   }
    
  //   return () => clearInterval(interval);

  // },[start]);


  const callme = ()=> {

    if(!ref.current){
      ref.current = setInterval(() => {
        setTime(pre => pre+1);
     },1000); 
    }
     
  }


  const closeme = ()=> {
    clearInterval(ref.current);
    ref.current = null;
    setTime(0);
  }


  return (
    <>
    <h1>{time}</h1>
    <button className='bg-black rounded-sm text-white py-2 px-4' onClick={() => 
      // setStart(true)
      callme()
      }> start </button>
    <button className='bg-black rounded-sm text-white py-2 px-4' onClick={() => { 
      // setStart(false);
      //  setTime(0);
       closeme()
       }}> stop </button>
    </>
  )
}




export default App