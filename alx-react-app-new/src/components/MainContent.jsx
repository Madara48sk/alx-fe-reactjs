import React from 'react';

function MainContent() {
    return (
        <main style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', margin: '10px', textAlign: 'center' }}>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '15px' }}>
           Here you'll find a collection of my most cherished cities.
          Each city holds a unique place in my heart and they all have been
          places that I've visited and would love to visit again.
          Take a look around.
           </p>
           <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'darkblue', fontStyle: 'italic'}}>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;