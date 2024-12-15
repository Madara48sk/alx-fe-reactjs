import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users?q=';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user', error);
    return null;
  }
};

const fetchUsersByCriteria = async (username, location, minRepos) => {
    let query = username ? `user:${username}` : '';
    if (location) {
      query += ` location:${location}`;
    }
    if (minRepos) {
        query += ` repos:>${minRepos}`
    }
    try{
        const response = await axios.get(`${GITHUB_SEARCH_API_URL}${query}`);
        return response.data;
    } catch(error) {
        console.error('Error fetching user by criteria', error)
        return null;
    }
}
export default { fetchUserData, fetchUsersByCriteria };