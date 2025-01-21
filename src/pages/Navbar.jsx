import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { homeatomState, massageatomState, notificationatomState, profileSelector } from '../store/atoms/navbar.atoms'

const Navbar = () => {

    const HomeState = useRecoilValue(homeatomState);
    const NotificationState = useRecoilValue(notificationatomState);


   console.log('rendered-navbar');

  return (

    <div className='flex justify-center items-center gap-5 bg-black p4-2 text-white'>

      <div>Navbar  </div>
      <div>Home ({HomeState}) </div>
       <div>Notificaions ({NotificationState}) </div>
        <MessageNavComp/>
       <Profilebtn/>
    </div>
  )
}

export default Navbar

function MessageNavComp() {   
    console.log('rendered-messageNavComp');
    const MessagesState = useRecoilValue(massageatomState);

  return (
    <>   <div>Messages ({MessagesState})</div>     
   
    </>
  )
}


function Profilebtn() {   
    console.log('rendered-Profilebtn');
  const profileSelectorState = useRecoilValue(profileSelector);
  const setMessageSelector = useSetRecoilState(massageatomState);
  return (
    <>       
    <div>Profile ({profileSelectorState})</div>
    <button  onClick={() => setMessageSelector(pre => pre + 1)}> Click Me </button>
    </>
  )
}