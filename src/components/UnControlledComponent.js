//No Event Handlers Needed
//State manintained internally in the DOM
//Form validations can only be done on Submit, not in inut change
//State is not predictable , form elements may loose reference during lifecycle. Input Ref can be affected by other resources as well in DOM


import React, { useRef } from 'react';
import { Input, Button } from '@material-ui/core';


const UnControlledComponent = () => {

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value)
    }

    return (
        <form>
            <Input text="text" placeholder='uncontrolled' inputRef={inputRef} />
            <Button onClick={handleSubmit}>Submit</Button>
        </form>

    );

}


export default UnControlledComponent;
