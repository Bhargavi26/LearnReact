//No Event Handlers Needed
//State manintained internally in the DOM
//Form validations can only be done on Submit, not in inut change
//State is not predictable , form elements may loose reference during lifecycle. Input Ref can be affected by other resources as well in DOM


import React, { useRef } from 'react';

const UnControlledComponent = () => {

    const inputRef = useRef(null);
    const countRef = useRef(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        countRef.current++
        console.log(inputRef.current.value)
        console.log(countRef.current)
    }

    console.log('Uncontrolled Render')
    return (
        <form>
             Uncontrolled Component:
            <input text="text" placeholder='uncontrolled' ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </form>

    );

}


export default UnControlledComponent;
