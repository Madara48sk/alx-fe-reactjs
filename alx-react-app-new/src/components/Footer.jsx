import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
           <p>© {new Date().getFullYear()} My Favorite Cities App</p>
        </footer>
    );
}

export default Footer;