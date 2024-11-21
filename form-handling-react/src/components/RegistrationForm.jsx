import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // Change from setError to setErrors

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    // Validation checks and set errors for each field
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required.';
    }
    if (!email) {
      newErrors.email = 'Email is required.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }

    // Basic email validation (improve as needed)
    if (email && !email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Update errors state
      return; // Stop form submission if there are errors
    }

    // Simulate API call - Replace with actual API call
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(data => {
            throw new Error(data.message || `HTTP error! status: ${response.status}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Registration successful:', data);
        // Optionally, redirect or update UI after successful registration
      })
      .catch(error => {
        setErrors({ general: 'Registration failed: ' + error.message }); // Set general error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.general && <div style={{ color: 'red' }}>{errors.general}</div>} {/* Display general error */}
      
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>} {/* Display username error */}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>} {/* Display email error */}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>} {/* Display password error */}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
