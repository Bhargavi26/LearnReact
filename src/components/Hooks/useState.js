
//Form validations can  be done on Submit and also in the Onchange event of Input
//Better Control over Form Elements and Data
//Form Elelment state is predicatbles as it is stored in a variable


import React, { useState } from 'react';

const UseState = () => {

    const [inputText, setInputText] = useState("")
    const [counter, setCounter] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter+1)
        console.log(counter)
    }

    console.log('Use State Re-Render')

    return (
        <form>
            Controlled Component :
            <input 
            text="text" 
            placeholder='controlled'
            value={inputText}
            onChange={(e)=>setInputText(e.target.value)} />
            <button color="primary" onClick={handleSubmit}>Submit</button>
        </form>

    );

}


export default UseState;
