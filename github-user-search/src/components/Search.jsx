import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null); 

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we cant find the user"); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter GitHub username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>} 
      {error && <p>{error}</p>} 

      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} /> 
        </div>
      )}
    </div>
  );
}

export default Search;