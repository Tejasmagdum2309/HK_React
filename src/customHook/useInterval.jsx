import React, { useEffect } from 'react'

const useInterval = (callback,time) => {

    const [loading,setLoading] = React.useState(true);
 
  useEffect(() => {
    const interval = setInterval(() => { setLoading(pre => !pre);  callback();}, time);

    return () => clearInterval(interval);
  })  

  return loading;

}

export default useInterval  