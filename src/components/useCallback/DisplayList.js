import React, { useState, useEffect } from 'react';
const DisplayList = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems())
        console.log("Updating Items")
    }, [getItems])


    return items && items.map((item) => (
        <div key={item}>
            {item}
        </div>
    ))
}

export default DisplayList;