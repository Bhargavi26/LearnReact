import React, { useState, useEffect } from 'react';


const UseEffectHook = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("All the time")
    })

    useEffect(() => {
        console.log("Only Once")
    }, [])


    useEffect(() => {
        console.log(`on ${value} update`)
    }, [value])

    const handleClick =() =>{
        setValue(value+1)
    }

    return (

        <div>
            <p>Counter: {value}</p>
            <button onClick={handleClick}>Increment Counter</button>
        </div>

    )
}

export default UseEffectHook;