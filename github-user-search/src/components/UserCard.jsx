import React from 'react';

function UserCard({ user }) {
    if (!user) return null;

    return (
        <div className="user-card">
        <img src={user.avatar_url} alt={`Avatar for ${user.login}`} />
        <h2>{user.login}</h2>
        <p>{user.name}</p>
        <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
            </a>
        </p>
        </div>
    );
}

export default UserCard;