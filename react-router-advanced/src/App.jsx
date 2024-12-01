import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import Post from './Post';
import Login from './Login';
import BlogPost from './BlogPost'; // Added import


function App() {
  const isAuthenticated = false; // Replace with actual authentication later

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/profile">Profile</Link>{' '}
        <Link to="/login">Login</Link>{' '}
        <Link to="/blog/1">Blog</Link> {/* Added link */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route with nested routes */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />}
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        <Route path="/post/:postId" element={<Post />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Added route */}
        <Route path="*" element={<p>404 Not Found</p>} /> {/* Catch-all */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;