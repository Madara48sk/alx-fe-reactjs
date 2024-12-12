import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import UserCard from './components/UserCard';
import githubService from './services/githubService';

function Main() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSearch = async (username) => {
      setUser(null);
      setError(false);
      setLoading(true);
      const userData = await githubService.fetchUserData(username);
      setLoading(false);
      if (userData) {
      setUser(userData);
      } else {
      setError(true);
      }
  };
  
  return (
      <>
      <header>
          <h1>GitHub User Search</h1>
      </header>
      <main>
          <SearchInput onSearch={handleSearch} />
          <UserCard user={user} loading={loading} error={error} />
      </main>
      </>
  );