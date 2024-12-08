import React, { useState } from 'react';

const ChildComponent = ({getColor}) => {
    const [activeColor, setActiveColor] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setActiveColor(value)
        getColor(value);
    }

    return (
        <input
            type="text"
            id="input"
            aria-label="input"
            onChange={handleChange}
            value={activeColor}
            style={{
                margin:'50px 20px 0px 0px'
              }}
        />
    )

}


export default ChildComponent;