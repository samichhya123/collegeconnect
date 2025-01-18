import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./collegeConnect.css";
import CollegeSlider from "./collegeSlider";
import Footer from "./Footer";
import Navbar from "./Navbar";

const College = () => {
  const navigate = useNavigate(); 
  const bannerImages = [
    { src: "/images/banner1.jpg", path: "/-/Kathford" }, // Make sure the key is `path`
    { src: "/images/banner2.jpg", path: "/page2" }, // Use `path` here as well
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Function to handle banner clicks
  const handleBannerClick = () => {
    navigate(bannerImages[currentImageIndex].path); // Use `path` here instead of `link`
  };

  return (
    <div className="background-container">
      <Navbar />
      <div className="main-container">
        <div className="frame">
          <h1>Welcome to College Connect!</h1>
          <p>
            Enjoy our facilities and explore multiple colleges within the Valley.
          </p>
        </div>
{/* 
         <div className="banner" onClick={handleBannerClick}>
          <img
            src={bannerImages[currentImageIndex].src}
            alt={`Banner ${currentImageIndex + 1}`}
            className="banner-image"
          />
        </div> */}

        <div className="description">
          <hr />
          <h1 className="text-center">Choose Your Dream College</h1>
        </div>
        <CollegeSlider />

        <div className="description">
          <hr />
          <h1 className="text-center">Why Choose College Connect?</h1>
        </div>

        <div className="college-description">
          <div className="content-card">
            <div className="overlay">
              <h2>Reliable Platform</h2>
            </div>
            <div className="college-card-content">
              <p>
                College Connect is a reliable platform for students searching for
                bachelor colleges by providing a comprehensive and user-friendly
                interface that consolidates essential information about various
                institutions. It offers detailed descriptions, campus images, and
                key data about each college, helping students make informed
                decisions. The platform's advanced search and filter options, along
                with interactive features like comparison tools and user reviews,
                ensure that students can easily find and evaluate colleges that
                best fit their academic and personal preferences.
              </p>
            </div>
          </div>

          <div className="content-card">
            <div className="overlay">
              <h2>Scholarship Opportunities</h2>
            </div>
            <div className="college-card-content">
              <p>
                By choosing College Connect, scholarship opportunities are provided
                for students searching for bachelor colleges by integrating a
                dedicated section that highlights available scholarships. This
                section could include filters for eligibility criteria, scholarship
                amounts, application deadlines, and direct links to application
                forms. By partnering with colleges and scholarship providers,
                College Connect can ensure that students have access to a curated
                list of financial aid options, making it easier for them to find and
                apply for relevant opportunities as they explore their educational
                options.
              </p>
            </div>
          </div>

          <div className="content-card">
            <div className="overlay">
              <h2>Direct College Entrance Examination</h2>
            </div>
            <div className="college-card-content">
              <p>
                College Connect enhances its functionality by integrating a
                dedicated section for college entrance examinations. This feature
                could provide students with a comprehensive list of upcoming entrance
                exams relevant to bachelor’s programs, including key details such as
                dates, application procedures, and preparation resources. By offering
                a centralized platform where students can easily access this
                information, College Connect would support users in navigating the
                often complex process of securing admission to their desired colleges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default College;
