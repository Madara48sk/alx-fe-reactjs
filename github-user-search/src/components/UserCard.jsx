import React from 'react';

function UserCard({ user }) {
  return (
    <div className="bg-white p-4 border rounded shadow flex items-center space-x-4 text-gray-800">
       <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full" />
      <div>
        <h3 className="font-bold text-xl">{user.login}</h3>
        {user.location && <p>Location: {user.location}</p>}
        <p>Repositories: {user.public_repos}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer"
           className="text-blue-600 hover:underline">Profile</a>
       </div>
    </div>
  );
}

export default UserCard;