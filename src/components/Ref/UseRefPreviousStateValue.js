
// The useRef Hook can also be used to keep track of previous state values.

// This is because we are able to persist useRef values between renders.

import React, { useEffect, useRef, useState } from 'react';



const UseRefPreviousStateValue = () => {
    const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
    <h1>Use Ref Store Previous State Value</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );

}


export default UseRefPreviousStateValue;