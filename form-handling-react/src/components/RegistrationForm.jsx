import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!username) {
      setError('Username is required.');
      return;
    }
    if (!email) {
      setError('Email is required.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }

    // Basic email validation (improve as needed)
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate API call - Replace with actual API call
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Registration successful:', data);
        // Optionally, redirect or update UI after successful registration
      })
      .catch(error => {
        setError('Registration failed: ' + error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {/* ... rest of your form remains the same ... */}
    </form>
  );
}

export default RegistrationForm;