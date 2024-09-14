import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import Home from "./components/Home";
import Destination from "./components/Destination";
import Traveltips from "./components/travel";
import Aboutus from "./components/aboutus";
import Contact from "./components/contact";
*/
import College from "./components1/CollegeConnect";
import Kathmandu from "./components/kathmandu";
import Bhaktapur from "./components/bhaktapur";
import Pokhara from "./components/pokhara";
import Chitwan from "./components/chitwan";
import Courses from "./components1/courses";
import AboutUs from "./components1/aboutus";
import Login from "./components1/Login";
import Register from "./components1/register";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/*<Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/traveltips" element={<Traveltips />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
           */}
          <Route path="/kathmandu" element={<Kathmandu />} />
          <Route path="/bhaktapur" element={<Bhaktapur />} />
          <Route path="/pokhara" element={<Pokhara />} />
          <Route path="/chitwan" element={<Chitwan />} />
          <Route path="/" element={<College />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <useEffect />
    </div> 
  );
}
export default App;
