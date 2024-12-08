import React, { useState } from 'react';
import DisplayList from './DisplayList';
const ExNoCallback = () => {

    const getItems = () => {
        return [number, number + 1, number + 2];
    }

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

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

export default ExNoCallback