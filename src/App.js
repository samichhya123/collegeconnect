import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollegeConnect from "./components1/CollegeConnect";
import Courses from "./components1/courses";
import AboutUs from "./components1/aboutus";
import Blog from "./components1/Blogdata";
import Login from "./components3/Login";
import Dashboard from "./components3/admin/Dashboard";
import Register from "./components3/register";
import Colleges from "./components2/Colleges";
import CollegeContainer from "./components2/react/bhaktapurwith3conatiner";

import Kathmandu from "./components2/pages/Kathmandu";
import AdminColleges from "./components3/admin/collegeCRUD";
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
  KathfordCollege, // Ensure this import is correct
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
import AdmitCard from "./components3/AdmitCard";
import PaymentPage from "./template/payment/PaymentPage";
import EntranceResults from "./template/entranceresult/EntranceResult";
import EntranceRegister from "./template/entranceRegister/EntranceRegister";
import BcaCourse from "./components1/coursesinfo/BcaCourse";
import PaymentConfirmation from "./template/payment/createPaymentFormFields";
import AdminDashboard from "./components3/admin/AdminDash";
import AdminCourses from "./components3/admin/courseCRUD";
import NearbyCollegesForm from "./template/algorithm/nearbyCollegesForm";
import EntranceExamList from "./components3/admin/adminEntrance";
import PracticeQuestion from "./template/PracticeQuestion";
import Counselling from "./components3/admin/Counselling";
import AdminCounseling from "./components3/admin/Counselling";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<CollegeConnect />} />
          <Route path="/Colleges" element={<Colleges />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admitcard" element={<AdmitCard />} />
          <Route path="/AdminSignIn" element={<AdminSignIn />} />

          {/* College Routes */}
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
          {/*Courses */}
          <Route path="/bca" element={<BcaCourse />} />
          {/* Other Routes */}
          <Route path="/CollegeContainer" element={<CollegeContainer />} />

          <Route path="/kathmandu" element={<Kathmandu />} />

          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route path="/admitcard" element={<AdmitCard />} /> */}
          <Route path="/managecolleges" element={<AdminColleges />} />
          <Route path="/managecourses" element={<AdminCourses />} />
          <Route path="/adminentrance" element={<EntranceExamList />} />
          <Route path="/admincounseling" element={<AdminCounseling/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-confirmation" component={PaymentConfirmation} />
          <Route path="/quiz" element={<PracticeQuestion />} />
          <Route path="/registration" element={<EntranceRegister />} />
          <Route path="/result" element={<EntranceResults />} />
          <Route path="/bookcounseling" element={<Counselling />} />
          <Route path="/nearby-colleges" element={<NearbyCollegesForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
