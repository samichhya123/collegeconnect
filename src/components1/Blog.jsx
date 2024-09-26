import React, { useState } from "react";
import "./Blog.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const blogData = [
    {
      id: 1,
      title: "Choosing the Right College in Nepal",
      content:
        "Navigating through the choices of colleges in Nepal can be overwhelming. This guide helps you make an informed decision based on courses, facilities, and career prospects.",
      imageSrc: image1,
    },
    {
      id: 2,
      title: "Top Engineering Colleges in Kathmandu",
      content:
        "Explore the best engineering colleges in Kathmandu that offer quality education and exceptional placement opportunities.",
      imageSrc: image2,
    },
    {
      id: 3,
      title: "How to Prepare for College Entrance Exams",
      content:
        "Preparing for entrance exams can be challenging. Here are some tips and tricks to ace your exams and secure a seat in your dream college.",
      imageSrc: image3,
    },
    {
      id: 4,
      title: "Scholarship Opportunities for Students",
      content:
        "Looking for financial aid? This blog highlights scholarship programs available for students in Nepal and how to apply.",
      imageSrc: image4,
    },
    {
      id: 5,
      title: "Studying Abroad: Is it Worth It?",
      content:
        "Many Nepali students dream of studying abroad, but is it worth it? Find out the pros and cons in this insightful blog.",
      imageSrc: image5,
    },
    {
      id: 6,
      title: "How to Choose the Right Career Path",
      content:
        "Choosing a career can be difficult. This blog helps you align your passion with a profession to build a successful career.",
      imageSrc: image6,
    },
    {
      id: 7,
      title: "The Impact of Technology on Education",
      content:
        "Discover how technology is revolutionizing the education system in Nepal, with new trends like e-learning and online classes.",
      imageSrc: image7,
    },
    {
      id: 8,
      title: "Best Colleges for Medical Studies in Nepal",
      content:
        "Find out which colleges in Nepal offer the best programs for aspiring doctors, along with details about their curriculum and facilities.",
      imageSrc: image8,
    },
    {
      id: 9,
      title: "Life as a Student in Kathmandu",
      content:
        "Living in Kathmandu as a student has its perks and challenges. Here’s what you can expect while studying in Nepal’s capital city.",
      imageSrc: image9,
    },
    {
      id: 10,
      title: "Internship Opportunities for Nepali Students",
      content:
        "Internships provide hands-on experience that is crucial for future employment. Learn about top internship opportunities for Nepali students.",
      imageSrc: image10,
    },
    {
      id: 11,
      title: "How to Balance Studies and Extracurricular Activities",
      content:
        "Balancing academics with extracurriculars can be tough. Here are some strategies to help you excel in both areas.",
      imageSrc: image11,
    },
    {
      id: 12,
      title: "Top 10 Trending Courses in 2024",
      content:
        "Stay ahead of the curve with this list of trending courses that will dominate in 2024 and offer great career opportunities.",
      imageSrc: image12,
    },
  ];

  // Pagination variables
  const itemsPerPage = 3; // Show 3 blogs per page
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get current page blogs
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Search handler
  const handleSearch = () => {
    const filteredBlogs = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setBlogs(filteredBlogs);
  };

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseDetail = () => {
    setSelectedBlog(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="main-blog-container">
      <Navbar />
      <div className="header-blog">
        <h1>Blogs</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="blog-container">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="article"
            onClick={() => handleSelectBlog(blog)}
          >
            <img src={blog.imageSrc} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="blog-detail">
          <button onClick={handleCloseDetail}>Close</button>
          <h2>{selectedBlog.title}</h2>
          <img src={selectedBlog.imageSrc} alt={selectedBlog.title} />
          <p>{selectedBlog.content}</p>
        </div>
      )}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
