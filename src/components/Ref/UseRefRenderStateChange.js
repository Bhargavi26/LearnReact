
// The useRef Hook can also be used to keep track of previous state values.

// This is because we are able to persist useRef values between renders.

import React, { useEffect, useRef, useState } from 'react';



const UseRefRenderStateChange = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
  
    useEffect(() => {
      count.current = count.current + 1;
    });
    // alert('Component Rendered')
  
    return (
      <>
      <h1>Use Ref Component Render Count on State Change</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    );

}


export default UseRefRenderStateChange;