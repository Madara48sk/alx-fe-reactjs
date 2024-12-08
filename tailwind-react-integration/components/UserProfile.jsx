import React from 'react';

function UserProfile() {
  return (
    <div className="mx-auto my-20 max-w-sm bg-gray-100 p-8 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 h-36 mx-auto rounded-full"
      />
      <h1 className="text-xl text-blue-800 my-4 text-center">John Doe</h1>
      <p className="text-gray-600 text-center text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;

 