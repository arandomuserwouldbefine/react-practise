import React, { useState, useEffect } from 'react';

function FunctionLifecycleExample() {
    const [message, setMessage] = useState('Hello, World!');

    useEffect(() => {
        console.log('Component will mount');
        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component did mount');
        return () => {
            console.log('Component did unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component did update');
    });

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default FunctionLifecycleExample;
