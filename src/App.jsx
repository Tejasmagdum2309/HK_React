
import { RecoilRoot } from 'recoil';
import SimpleCount from './components/BasicCounterExample/SimpleCount.jsx'
import {CountProvider} from './context/CountContext.jsx'
import Todos from './pages/Todos.jsx';

function App() {
  // const [count, setCount] = useState(0)

  console.log('rendered-app');

  return (
    <>
      
      
      {/* <h1 className = 'text-center p-6'> chalo shuru kartehe</h1> */}
  <RecoilRoot><Todos /></RecoilRoot>
      
     

      {/* <RecoilRoot><SimpleCount /></RecoilRoot>   */}

      
    </>
  )
}

export default App
