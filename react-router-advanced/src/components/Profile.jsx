import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => (
  <div>
    <h1>Profile</h1>
    <Link to="/profile/details">Details</Link>
    <br />
    <Link to="/profile/settings">Settings</Link>
  </div>
);

export default Profile;