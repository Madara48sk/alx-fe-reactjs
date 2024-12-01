import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import Post from './Post'; // For dynamic routing
import Login from './Login'; // For protected routes


function App() {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/profile">Profile</Link>{' '}
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/post/:postId" element={<Post />} />


        <Route path="*" element={<p>Not Found</p>} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;