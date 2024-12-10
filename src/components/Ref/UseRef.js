//The useRef hook is often used to store mutable values that don’t trigger re-renders

import React, { useState } from 'react';
import UseRefFocus from './UseRefFocus';
import UseRefPreviousStateValue from './UseRefPreviousStateValue';
import UseRefRender from './UseRefRender';
import UseRefRenderStateChange from './UseRefRenderStateChange';
import CreateRef from './CreateRef';
import UseRefVsCreateRef from './UseRefVsCreateRef';
import CreateRefPreviousStateValue from './CreateRefPreviousStateValue';

const UseRef = () => {
    return (
        <div>
        <UseRefFocus/>
        <br/>
        <br/>
        <UseRefPreviousStateValue/>
        <br/>
        <br/>
        <UseRefRender/>
        <br/>
        <br/>
        <UseRefRenderStateChange/>
        <br/>
        <br/>
        <CreateRef/>
        <br/>
        <br/>
        <UseRefVsCreateRef/>
        <br/>
        <br/>
        <CreateRefPreviousStateValue/>
        </div>
    )
}

export default UseRef