 import React from 'react';

 function Footer() {
   return (
       <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px', backgroundColor: '#f0f0f0', borderTop: '1px solid #ddd' }}>
           <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
       </footer>
   )
 }

 export default Footer;