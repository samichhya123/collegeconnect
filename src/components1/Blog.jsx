import React from 'react';
import "./Blog.css";

const Blog = ({ blog, onSelect }) => {
  return (
    <div 
      className="article blog-card" 
      data-id={blog.id} 
      onClick={() => onSelect(blog)}
    >
      <img src={blog.imageSrc} alt={blog.title} />
      <h2 className="blog-card-title">{blog.title}</h2>
      <p className="blog-card-description">
        {blog.content.substring(0, 100)}...
      </p>
    </div>
  );
};

export default Blog;
