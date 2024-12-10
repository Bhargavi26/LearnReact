
//UseRef only 1 ref will be created
//Create Ref - Refernce will be created on each render


//Value of useRef can be modified and the component will not be re-rendered on change of value


import React, { createRef, useRef, useState } from 'react';

const UseRefVsCreateRef = () => {

    const [renderIndex, setRenderIndex] = useState(1);

    const refFromUseRef = useRef();
    const refFromCreateRef = createRef();

    if (!refFromUseRef.current) {
        console.log('useRef log'+ refFromUseRef.current)
        refFromUseRef.current = renderIndex
    }

    if (!refFromCreateRef.current) {
        console.log('CreateRef log'+ refFromCreateRef.current)
        refFromCreateRef.current = renderIndex
    }
    return (
        <>
         <h1>Use Ref vs Create Ref</h1>
            <p>Current Render Index : {renderIndex} </p>
            <p>
                <b>refFromUseRef</b> value : {refFromUseRef.current}
            </p>
            <p>
                <b>refFromCreateRef</b> value : {refFromCreateRef.current}
            </p>
            <button onClick={() => setRenderIndex((prev) => prev + 1)}>
                Cause Re-render
            </button>
        </>
    );

}


export default UseRefVsCreateRef;
