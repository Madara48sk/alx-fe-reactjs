import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';
import UserCard from './UserCard';
import Pagination from './Pagination';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(30);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
       setLoading(true)
       setError('')
       try {
            const data = await searchUsers({ username, location, minRepos, page: currentPage, per_page: perPage });
           if(data.error){
            setError(data.error)
           } else{
              setResults(data.results)
              setTotalCount(data.totalCount)
           }

        } catch (err) {
           setError('Failed to load users.')
          } finally {
           setLoading(false)
         }
    }
    return (
        <div className="flex flex-col gap-4 p-4">
             <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center  bg-white shadow rounded-md p-4">
               <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
                   <label htmlFor="username" className="mb-1 text-gray-700">Username:</label>
                   <input type="text" id="username" className="p-2 border rounded text-gray-800"
                     value={username} onChange={(e) => setUsername(e.target.value)} />
               </div>
                <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
                    <label htmlFor="location" className="mb-1 text-gray-700">Location:</label>
                    <input type="text" id="location" className="p-2 border rounded text-gray-800"
                      value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
                    <label htmlFor="minRepos" className="mb-1 text-gray-700">Min Repos:</label>
                    <input type="number" id="minRepos" className="p-2 border rounded text-gray-800"
                     value={minRepos} onChange={(e) => setMinRepos(e.target.value)} />
                </div>
               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                   Search
               </button>
             </form>
             { loading && <div className="text-center">Loading users...</div>}
             { error &&  <div className="text-center text-red-500">{error}</div> }
             <div className='flex flex-col gap-4'>
             {
                 results.map((user)=>(
                   <UserCard key={user.id} user={user} />
                 ))
              }
              {
                results.length > 0 &&
                <Pagination totalCount={totalCount} currentPage={currentPage} perPage={perPage} onPageChange={handlePageChange} />
              }
           </div>
        </div>
    );
}

export default Search;