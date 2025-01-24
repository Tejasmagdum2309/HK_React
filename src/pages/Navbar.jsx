import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { notifications } from '../store/atoms/navbar.async';
// import { useRecoilValue, useSetRecoilState } from 'recoil'
// import { homeatomState, massageatomState, notificationatomState, profileSelector } from '../store/atoms/navbar.atoms'

const Navbar = () => {

//     const HomeState = useRecoilValue(homeatomState);
//     const NotificationState = useRecoilValue(notificationatomState);


// day 3 practice recoils => aton + seletos + Async data queries...


  const allNotifications = useRecoilValue(notifications);

   console.log('rendered-navbar');

  return (

    <div className='flex justify-center items-center gap-5 bg-black p4-2 text-white'>

      <div>Navbar  </div>
      <div>Home ({allNotifications.homeatomState}) </div>
       <div>Notificaions ({allNotifications.notificationatomState}) </div>
        <MessageNavComp/>
       <Profilebtn/>
    </div>
  )
}

export default Navbar

function MessageNavComp() {   
    console.log('rendered-messageNavComp');
    // const MessagesState = useRecoilValue(massageatomState);

    const allNotifications = useRecoilValue(notifications);


  return (
    <>   <div>Messages ({allNotifications.massageatomState})</div>     
   
    </>
  )
}


function Profilebtn() {   
    console.log('rendered-Profilebtn');
  // const profileSelectorState = useRecoilValue(profileSelector);
  // const setMessageSelector = useSetRecoilState(massageatomState);
  const allNotifications = useRecoilValue(notifications);
  const setMessageSelector = useSetRecoilState(notifications);
  return (
    <>       
    <div>Profile ({allNotifications.profileatomState})</div>
    {/* <button  onClick={() => setMessageSelector(pre => pre + 1)}> Click Me </button> */}
    <button  onClick={() => setMessageSelector(  (pre) => {  return {...pre , profileatomState : pre.profileatomState + 1 } } ) }> Click Me </button>
    </>
  )
}