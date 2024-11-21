import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    // Basic email validation (can be improved)
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    //Simulate API call - Replace with actual API call
    fetch('/api/register', { //Replace with your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then(response => {
        if (!response.ok) {
          // Handle different HTTP error codes more gracefully here if needed
          if (response.status === 400) {
            return response.json().then(data => {
              throw new Error(data.message || "Bad Request"); // Extract error message from API response
            });
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }
        return response.json();
      })
      .then(data => {
        console.log('Registration successful:', data);
        setError(''); //Clear error if successful
      })
      .catch(error => {
        setError('Registration failed: ' + error.message); //Display error message from API or network error.
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;