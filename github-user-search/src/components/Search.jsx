import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const usernames = username.split(',').map(name => name.trim()); 

      const userPromises = usernames.map(name => 
        axios.get(`https://api.github.com/users/${name}`)
      );

      const responses = await Promise.all(userPromises); 
      setUsers(responses.map(response => response.data)); 
    } catch (err) {
      setError("Looks like we cant find the users"); 
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchUserData(); 
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter GitHub usernames (comma-separated)" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>} 
      {error && <p>{error}</p>} 

      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}> 
              <h2>{user.login}</h2> 
              <p>Location: {user.location}</p> 
              <p>GitHub Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p> 
              <img src={user.avatar_url} alt={user.login} /> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;