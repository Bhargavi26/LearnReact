import React, { useState } from 'react';
import ExNoCallback from './ExNoCallback';
import ExYesCallback from './ExYesCallback';
const Callback = () => {
    return (
        <div>
        <ExNoCallback/>
        <br/>
        <br/>
        <ExYesCallback/>
        </div>
    )
}

export default Callback