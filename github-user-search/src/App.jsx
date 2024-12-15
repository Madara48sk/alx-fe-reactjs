import React from 'react';
import Search from './components/Search';
function App() {
   return (
       <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
           <Search />
       </div>
    );
}

export default App;