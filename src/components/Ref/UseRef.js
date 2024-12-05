
import React, { useRef } from 'react';

const UseRef = () => {

    const inputElement= useRef(null);

    const handleInput = (e) => {
      inputElement.current.focus();
    }

    return (
        <>
        Use Ref:
            <input ref={inputElement} />
            <button onClick={handleInput}>Click to Focus</button>
        </>

    );

}


export default UseRef;
