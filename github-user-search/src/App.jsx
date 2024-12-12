import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import UserCard from './components/UserCard';
import githubService from './services/githubService';

function App() {
    const [user, setUser] = useState(null);
    const handleSearch = async (username) => {
    const userData = await githubService.searchUser(username);
    setUser(userData);
    };

    return (
        <div className="App">
        <header>
            <h1>GitHub User Search</h1>
        </header>
        <main>
            <SearchInput onSearch={handleSearch} />
            <UserCard user={user} />
        </main>
        </div>
    );
}

export default App;