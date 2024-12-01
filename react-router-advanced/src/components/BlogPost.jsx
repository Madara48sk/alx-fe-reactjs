import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return <h1>Blog Post {id}</h1>;
};

export default BlogPost;