import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const PostsComponent = () => {
  const query = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60,     // 1 minute
    refetchOnWindowFocus: false, // Adjust as needed
    keepPreviousData: true,    // Keep old data while fetching new data
  });

  const { data, isLoading, isError, error } = query;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message || 'An unexpected error occurred'}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => query.refetch()}>Refetch</button> {/* More controlled refetch */}
    </div>
  );
};

export default PostsComponent;