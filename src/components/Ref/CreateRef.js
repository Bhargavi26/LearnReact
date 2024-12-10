
import React, { createRef } from 'react';

const CreateRef = () => {

    const inputElement= createRef();

    const handleInput = (e) => {
      inputElement.current.focus();
    }

    return (
        <>
         <h1>Create Ref</h1>
            <input ref={inputElement} />
            <button onClick={handleInput}>Click to Focus</button>
        </>

    );

}

export default CreateRef;
