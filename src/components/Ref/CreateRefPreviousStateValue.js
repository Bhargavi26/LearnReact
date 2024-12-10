
// The useRef Hook can also be used to keep track of previous state values.

// This is because we are able to persist useRef values between renders.

import React, { useEffect, createRef, useState } from 'react';



const CreateRefPreviousStateValue = () => {
    const [inputValue, setInputValue] = useState("");
  const previousInputValue = createRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
    <h1>Create Ref Not Store Previous State Value</h1>
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


export default CreateRefPreviousStateValue;