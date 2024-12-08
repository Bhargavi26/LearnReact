import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import '../../styles.css'

const ParentComponent = () => {
    const [color, setColor] = useState("red");

    const getColor = (value) => {
        setColor(value);
    }

    return (
        <div>
        <div 

        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          margin: "20px auto",
        }}>
            <ChildComponent getColor={getColor} />
        </div>
        </div>

    )
}


export default ParentComponent;