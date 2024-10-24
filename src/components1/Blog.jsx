import React from 'react';
import "./Blog.css"
const Blog = ({ blog, onSelect }) => {
  return (
    <div className="article" onClick={() => onSelect(blog)}>
      <img src={blog.imageSrc} alt={blog.title} />
      <h2>{blog.title}</h2>
      <p>{blog.content.substring(0, 100)}...</p>
    </div>
  );
};

export default Blog;
