import React, {useState} from 'react';
export function Timer (){
     const [counter,setCounter] = useState(0)

     const handleClick = () => {
        setCounter(counter+1)
     }

    return (
 <>
 <h1>Simple Counter</h1>
 <h3>{counter}</h3>
 <button onClick={handleClick}>Click</button>
 </>
    )
}