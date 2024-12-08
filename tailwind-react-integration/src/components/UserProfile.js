// src/components/UserProfile.js
function UserProfile() {
    return (
      <div className="bg-gray-100 rounded-lg shadow-lg mx-auto my-10 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"
        />
        <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 text-center">
          John Doe
        </h1>
        <p className="text-sm sm:text-sm md:text-base text-gray-600 text-center">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;