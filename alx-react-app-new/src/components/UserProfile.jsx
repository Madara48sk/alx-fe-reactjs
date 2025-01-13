import React from 'react';

function UserProfile(props) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '5px' }}>{props.name}</h2>
            <p style={{ marginBottom: '5px' }}>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;