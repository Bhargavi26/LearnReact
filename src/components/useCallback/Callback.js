
//useCallback hook is used to memoize a function and return the same function reference across re-renders unless its dependencies change. This can optimize performance by preventing unnecessary re-creations of functions.

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