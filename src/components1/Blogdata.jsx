import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Blog from "./Blog"; // Import the Blog component
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

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);


  const blogData = [
    {
      id: 1,
      title: "Choosing the Right College in Nepal",
      content: "Navigating through the choices...",
      imageSrc: image1,
    },
    {
      id: 2,
      title: "Top Engineering Colleges in Kathmandu",
      content: "Explore the best engineering...",
      imageSrc: image2,
    },
    {
      id: 3,
      title: "How to Prepare for College Entrance Exams",
      content: "Preparing for entrance exams...",
      imageSrc: image3,
    },
    {
      id: 4,
      title: "Scholarship Opportunities for Students",
      content: "Looking for financial aid?",
      imageSrc: image4,
    },
    {
      id: 5,
      title: "Studying Abroad: Is it Worth It?",
      content: "Many Nepali students dream...",
      imageSrc: image5,
    },
    {
      id: 6,
      title: "How to Choose the Right Career Path",
      content: "Choosing a career can be difficult...",
      imageSrc: image6,
    },
    {
      id: 7,
      title: "The Impact of Technology on Education",
      content: "Discover how technology is...",
      imageSrc: image7,
    },
    {
      id: 8,
      title: "Best Colleges for Medical Studies in Nepal",
      content: "Find out which colleges...",
      imageSrc: image8,
    },
    {
      id: 9,
      title: "Life as a Student in Kathmandu",
      content: "Living in Kathmandu as a student...",
      imageSrc: image9,
    },
    {
      id: 10,
      title: "Internship Opportunities for Nepali Students",
      content: "Internships provide hands-on experience...",
      imageSrc: image10,
    },
    {
      id: 11,
      title: "How to Balance Studies and Extracurricular Activities",
      content: "Balancing academics with...",
      imageSrc: image11,
    },
    {
      id: 12,
      title: "Top 10 Trending Courses in 2024",
      content: "Stay ahead of the curve...",
      imageSrc: image12,
    },
  ];

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  // Pagination variables
  const itemsPerPage = 6; // Show 3 blogs per page
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get current page blogs
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Search handler
  

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
    <div>
      <Navbar />
      
      <div className="blog-container">
        {currentBlogs.map((blog) => (
          <Blog key={blog.id} blog={blog} onSelect={handleSelectBlog} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      {selectedBlog && (
        <div className="blog-detail">
          <div className="blog-detail-content">
            <img src={selectedBlog.imageSrc} alt={selectedBlog.title} />
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
            <button onClick={handleCloseDetail}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Blogs;
