
import React, { useRef } from 'react';

const UseRefReRender = () => {

    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current++
        console.log(countRef.current)
    }

    console.log('Component Rendered')
    return (
        <>
            Use Ref Update Value:

            <button onClick={handleClick}>Click Me </button>
        </>

    );

}


export default UseRefReRender;
