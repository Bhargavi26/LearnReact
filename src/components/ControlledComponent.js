
//Form validations can  be done on Submit and also in the Onchange event of Input
//Better Control over Form Elements and Data
//Form Elelment state is predicatbles as it is stored in a variable


import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

const ControlledComponent = () => {

    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputText)
    }

    return (
        <form>
            <Input 
            text="text" 
            placeholder='controlled'
            value={inputText}
            onChange={(e)=>setInputText(e.target.value)} />
            <Button color="primary" onClick={handleSubmit}>Submit</Button>
        </form>

    );

}


export default ControlledComponent;
