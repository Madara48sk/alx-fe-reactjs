import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile({ bio, ...props }) {
const userData = useContext(UserContext);

return (
    <div className="user-profile">
    <h2>User Profile</h2>
    <p>Name: {userData.name}</p>
    <p>Email: {userData.email}</p>
    <p>Age: {props.age}</p>
        <p>Bio: {bio}</p>
    </div>
);
}

export default UserProfile;