import React, { useState, createContext, useContext } from 'react';

// Create the context
const countContext = createContext();

// Provider component
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <countContext.Provider value={{ count, setCount }}>
      {children}
    </countContext.Provider>
  );
};

// Custom hook to use the count context
export const useCountContext = () => useContext(countContext);
