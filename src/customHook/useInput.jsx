import React from 'react'

const useInput = (initialValue) => {
  
    const [value, setValue] = React.useState(initialValue);

    const handleChange = (e) => {
      setValue(e.target.value);
    }
  return [value, handleChange];
}

export default useInput