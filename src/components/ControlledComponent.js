
//Form validations can  be done on Submit and also in the Onchange event of Input
//Better Control over Form Elements and Data
//Form Elelment state is predicatbles as it is stored in a variable

// In React, a controlled component is a component that has its state controlled by the parent component. The parent component passes the state as props to the controlled component and also handles any changes to the state via callback functions. The controlled component only renders the received props and does not have its own state.

// An uncontrolled component, on the other hand, maintains its own internal state and updates it using DOM events. The component directly updates the DOM and does not rely on the parent component to pass and update the state.

// An example of a controlled component is a form input that receives its value from the parent component as a prop and updates the parent component’s state via a callback function when the input is changed. An uncontrolled component would be a form input that maintains its own internal state and updates the value directly when the input is changed, without the need for a callback function.

// In general, controlled components are considered to be more predictable and easier to debug than uncontrolled components. They also make it easier to implement complex validation and error handling.
import React, { useState } from 'react';

const ControlledComponent = () => {

    const [inputText, setInputText] = useState("")
    const [counter, setCounter] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter+1)
        console.log(counter)
    }

    console.log('Controlled Re-Render')

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


export default ControlledComponent;
