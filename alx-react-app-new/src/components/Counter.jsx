import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{textAlign: 'center', padding: '20px'}}>
            <p style={{fontSize: '2rem', marginBottom: '20px'}}>Current Count: {count}</p>
            <button style={{margin: '5px', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', backgroundColor: 'lightgreen'}} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{margin: '5px', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', backgroundColor: 'lightcoral'}} onClick={() => setCount(count - 1)}>Decrement</button>
            <button style={{margin: '5px', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', backgroundColor: 'lightblue'}} onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;