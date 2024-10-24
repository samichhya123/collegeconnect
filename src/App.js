import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CollegeConnect from "./components1/collegeConnect";
import Courses from "./components1/courses";
import AboutUs from "./components1/aboutus";
import Blog from "./components1/blogData";
import Login from "./components3/Login";
import Register from "./components3/register";
import Colleges from "./components2/Colleges";
import CollegeContainer from "./components2/react/bhaktapurwith3conatiner";
import Lalitpur from "./components2/pages/Lalitpur";
import Kathmandu from "./components2/pages/Kathmandu";
import Bhaktapur from "./components2/pages/Bhaktapur";
import EntranceExamForm from "./components3/entranceExamForm";
import AdminSignIn from "./components3/adminSignIn";
import {
  KistCollege,
  Islington,
  PrimeCollege,
  BhaktapurMultipleCampus,
  Chankaya,
  KathmanduCollegeOfTechnology,
  NepalEngineeringCollege,
  Samridhhi,
  Khowpa,
  Seabird,
  Swastik,
  ISMTCollege,
  KathfordCollege,
  AcademiaCollege,
  AcmeEngineeringCollege,
  Amrit,
  British,
  Campion,
  CulinaryAcademy,
  Deerwalk,
  GoldenGate,
  HeraldCollege,
  HimalayaCollege,
  Janakpur,
  KFA,
  KMC,
  Kantipur,
  LalitpurEngineering,
  NCIT,
  Nagarjuna,
  National,
  NepalCommerce,
  NepalLawCampus,
  NepalRastriya,
  Orchid,
  PadmaKanya,
  Patan,
  Quest,
  Ritzz,
  Sagarmatha,
  StXaviers,
  Vedas,
  Virinchi,
} from "./collegeLinks";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<CollegeConnect />} />
          <Route path="/Colleges" element={<Colleges />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/EntranceExamForm" element={<EntranceExamForm />} />
          <Route path="/AdminSignIn" element={<AdminSignIn />} />
          <Route path="/-/ISMTCollege" element={<ISMTCollege />} />
          <Route path="/-/Kathford" element={<KathfordCollege />} />
          <Route path="/-/Academia" element={<AcademiaCollege />} />
          <Route path="/-/Acme" element={<AcmeEngineeringCollege />} />
          <Route path="/-/Amrit" element={<Amrit />} />
          <Route path="/-/British" element={<British />} />
          <Route path="/-/Campion" element={<Campion />} />
          <Route path="/-/Deerwalk" element={<Deerwalk />} />
          <Route path="/-/Goldengate" element={<GoldenGate />} />
          <Route path="/-/Herald" element={<HeraldCollege />} />
          <Route path="/-/Himalaya" element={<HimalayaCollege />} />
          <Route path="/-/Janakpur" element={<Janakpur />} />
          <Route path="/-/KFA" element={<KFA />} />
          <Route path="/-/KMC" element={<KMC />} />
          <Route path="/-/CulinaryAcademy" element={<CulinaryAcademy />} />
          <Route path="/-/Kantipur" element={<Kantipur />} />
          <Route path="/-/Lalitpur" element={<LalitpurEngineering />} />
          <Route path="/-/NCIT" element={<NCIT />} />
          <Route path="/-/Nagarjuna" element={<Nagarjuna />} />
          <Route path="/-/National" element={<National />} />
          <Route path="/-/virinchi" element={<Virinchi />} />
          <Route path="/-/patan" element={<Patan />} />
          <Route path="/-/Nepalcommerce" element={<NepalCommerce />} />
          <Route path="/-/NepalLaw" element={<NepalLawCampus />} />
          <Route path="/-/NepalRatriya" element={<NepalRastriya />} />
          <Route path="/-/Orchid" element={<Orchid />} />
          <Route path="/-/Padmakanya" element={<PadmaKanya />} />
          <Route path="/-/Quest" element={<Quest />} />
          <Route path="/-/Ritz" element={<Ritzz />} />
          <Route path="/-/Sagarmatha" element={<Sagarmatha />} />
          <Route path="/-/xaviers" element={<StXaviers />} />
          <Route path="/-/Vedas" element={<Vedas />} />
          <Route path="/-/prime" element={<PrimeCollege />} />
          <Route path="/-/islington" element={<Islington />} />
          <Route path="/-/kist" element={<KistCollege />} />
          <Route
            path="/-/BhaktapurMulitpleCampus"
            element={<BhaktapurMultipleCampus />}
          />
          <Route path="/-/chanakya" element={<Chankaya />} />
          <Route path="/-/kct" element={<KathmanduCollegeOfTechnology />} />
          <Route path="/-/nec" element={<NepalEngineeringCollege />} />
          <Route path="/-/samriddhi" element={<Samridhhi />} />
          <Route path="/-/khwopa" element={<Khowpa />} />
          <Route path="/-/swastik" element={<Swastik />} />
          <Route path="/-/seabird" element={<Seabird />} />
          <Route path="/CollegeContainer" element={<CollegeContainer />} />
          <Route path="/lalitpur" element={<Lalitpur />} />
          <Route path="/bhaktapur" element={<Bhaktapur />} />
          <Route path="/kathmandu" element={<Kathmandu />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Colleges />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <useEffect />
    </div>
  );
}
export default App;
