import React from 'react';
import { Timer } from './Counter';
import { StopWatch } from './StopWatch';
import Stopwatches from './StopWatches';

export function SimpleApps () {
      
    return (

        <>
        <Timer></Timer>
        <StopWatch></StopWatch>
        <br/>
        <br />
        <Stopwatches/>
        </>
    )

}