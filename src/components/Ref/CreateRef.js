
import React, { createRef } from 'react';

const CreateRef = () => {

    const inputElement= createRef();

    const handleInput = (e) => {
      inputElement.current.focus();
    }

    return (
        <>
         Create Ref:
            <input ref={inputElement} />
            <button onClick={handleInput}>Click to Focus</button>
        </>

    );

}

export default CreateRef;
