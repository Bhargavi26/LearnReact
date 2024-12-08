import React, { useState, useEffect } from 'react';

const ExNoMemo = () => {



    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const doubleNumber = slowFunction(number)


    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    }

    useEffect(()=>{
        console.log('Theme Changed')
    },[theme])

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


export default ExNoMemo


const slowFunction = (num)=>{
    console.log("Calling Slow Function")
    for(let i=0;i<=100000;i++){}
    return num*2
}