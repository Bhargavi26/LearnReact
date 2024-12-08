import React, { useState, useCallback } from 'react';
import DisplayList from './DisplayList';
const ExYesCallback = () => {

   
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    const getItems = useCallback(() => {
        
        if(number){
            return [number, number + 1, number + 2]
        } else{
            return null
        } 
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    }

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>
            <DisplayList getItems={getItems}></DisplayList>


        </div>
    )
}

export default ExYesCallback