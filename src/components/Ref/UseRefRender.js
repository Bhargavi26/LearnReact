
//It can be used to store a mutable value that does not cause a re-render when updated.

import React, { useRef } from 'react';

const UseRefReRender = () => {

    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current++
        console.log(countRef.current)
    }

    console.log('Component Rendered')
    alert('Component Rendered')
    return (
        <>
            <h1>Use Ref Component Render Count</h1>

            <button onClick={handleClick}>Click Me </button>
        </>

    );

}


export default UseRefReRender;
