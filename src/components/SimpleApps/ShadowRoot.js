import React, { useEffect, useRef } from 'react';

function ShadowRoot() {
    const shadowRootRef = useRef(null);

    useEffect(() => {
        if (shadowRootRef.current) {
            const shadowRoot = shadowRootRef.current.attachShadow({ mode: 'closed' });
            shadowRoot.innerHTML = `
                <style>
                    /* Styles specific to this component */
                    h1 {
                        color: blue;
                    }
                </style>
                <h1>Hello from Shadow DOM!</h1>
            `;
        }
    }, []);

    return <div ref={shadowRootRef}></div>;
}


export default ShadowRoot;