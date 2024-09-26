import React from "react";
import Navbar from "../components1/Navbar";
import Footer from "../components1/Footer";
import "./Colleges.css";
import "../components2/react/styles.css";
import Kathmandu from "../components2/pages/Kathmandu";
import Lalitpur from "../components2/pages/Lalitpur";
import Bhaktapur from "../components2/pages/Bhaktapur";
import CollegeContainer from "./react/bhaktapurwith3conatiner";
const Colleges = () => {
  return (
    <div className="background-container">
      <Navbar />
   
      <div className="colleges-container">
      <CollegeContainer/>
     <Kathmandu/>
     <Lalitpur/>
     <Bhaktapur/>
      </div>
      <Footer />
    </div>
  );
};

export default Colleges;
