//Why Not use useMemo everywhere?
//Performace Overhead and Memory Overhead as you are calling additional fucntion usememo() and store an additional variable in memory to store memoized value
// Use memo when Function when you need performance benefits, when your call is very slow* Expensive Calcualtion

// Referential Equality, when you compare two variables in JS its compare reference incase of Objects  and Arrays
// const var1 = {'a':1,'b':2}
// const var2 = {'a':1,'b':2}

// Here var1 is not equal to var2, they reference a different object. 
//Use the useMemo hook to memoize arrays and objects which will keep their reference equality (and won't get re-created on each render) as long as the dependencies (second argument) stay the same. 
//     Also use useMemo to cache heavy computations, such as array operations, filtering, etc.

import React, { useState, useMemo, useEffect } from 'react';

const ExYesMemo = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])


    const theme = useMemo(() => {
        return {
            backgroundColor: dark ? '#333' : '#FFF',
            color: dark ? '#FFF' : '#333'
        }
    }, [dark])

    useEffect(() => {
        console.log('Theme Changed')
    }, [theme])

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>

            <div style={theme}>{doubleNumber}</div>
        </>
    )
}


export default ExYesMemo


const slowFunction = (num) => {
    console.log("Calling Slow Function")
    for (let i = 0; i <= 100000; i++) { }
    return num * 2
}