import React, { useEffect, useState } from 'react'

const useDebounce = (ip, time) => {

    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {

       let timer = setTimeout(() => { setDebouncedValue(timer); console.log("debouncing")}, time);

       return () => {   
        clearTimeout(timer);
       }
    }, [ip]);

  return debouncedValue;
}

export default useDebounce;