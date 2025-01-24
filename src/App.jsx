
import { RecoilRoot } from 'recoil';
import SimpleCount from './components/BasicCounterExample/SimpleCount.jsx'
import {CountProvider} from './context/CountContext.jsx'
import Todos from './pages/Todos.jsx';
import Navbar from './pages/Navbar.jsx';
import SimpleCnt from './pages/SimpleCnt.jsx';
import { Suspense } from 'react';
import TodosFamily from './pages/TodosFamily.jsx';

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

    <RecoilRoot><TodosFamily/></RecoilRoot>




      
     

      {/* <RecoilRoot><SimpleCount /></RecoilRoot>   */}

      

      
    </>
  )
}

export default App
