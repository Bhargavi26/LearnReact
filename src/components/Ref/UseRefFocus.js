import React, {useRef} from 'react';

const UseRefFocus = () => {


    const inputValue = useRef()

    const handleFocus = () => {
        inputValue.current.focus()
    }

    return(
        <>
        <h1>Use Ref Focus</h1>
        <input
        type="text"
        ref={inputValue}></input>
        <button onClick={handleFocus}> Click</button>
        </>
    )

}

export default UseRefFocus;