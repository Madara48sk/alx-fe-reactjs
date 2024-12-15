const API_BASE_URL = 'https://api.github.com';

export async function searchUsers({ username, location, minRepos, page = 1, per_page = 30 }) {
    try {
      let query = `${username ? username : ''}`;
      if (location) {
          query += `+location:${location}`;
        }
      if(minRepos){
          query += `+repos:>${minRepos}`
      }


        const params = new URLSearchParams({
            q: query || "*",
             per_page: per_page,
            page: page
         });

        const response = await fetch(`${API_BASE_URL}/search/users?${params}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { results: data.items, totalCount: data.total_count, page: page, per_page: per_page };
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return { error: error.message };
    }
}