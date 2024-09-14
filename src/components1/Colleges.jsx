import React from "react";
import Navbar from "./Navbar";
import "./CollegeConnect.css";
import british from "../images/bristish.jpg";

const Colleges = () => {
  return (
    <div className="background-container">
      <Navbar />
      <div className="colleges-container">
        <h2>Colleges</h2>
      </div>
      <div className="list-colleges">
        <div className="list-college-description">
          <div className="college-logo">
            <img src={british} alt="british" className="container-british" />
          </div>
          <ul>
            <li>Name: British College</li>
            <li>Location:</li>
            <li>Contact No:</li>
            <li>Email:</li>
          </ul>
        </div>

        <div className="list-college-description">
          <div className="college-logo">
            <img src={islington} alt="islington" className="container-islington"/>
          </div>
          <ul>
            <li>Name: Islington College</li>
            <li>Location:</li>
            <li>Contact No:</li>
            <li>Email:</li>
          </ul>
        </div>

        <div className="list-college-description">
        <div className="college-logo">
            <img src={islington} alt="islington" className="container-islington"/>
          </div>
          <ul>
            <li>
              Name: Kathford International College of Engineering & Management
            </li>
            <li>Location: Balkumari</li>
            <li>Contact No:</li>
            <li>Email:</li>
          </ul>
        </div>

        <div className="list-college-description">
          <ul>
            <li>Name: Kathmandu Model College</li>
            <li>Location:</li>
            <li>Contact No:</li>
            <li>Email:</li>
          </ul>
        </div>

        <div className="list-college-description">
          <ul>
            <li>Name: National College of Computer Studies</li>
            <li>Location:</li>
            <li>Contact No:</li>
            <li>Email:</li>
          </ul>
        </div>

        <div className="list-college-description">
          <ul>
            <li>Name: PadmaKanya Multiple Campus</li>
            <li>Location:</li>
            <li>Contact No:</li>
            <li>Email:</li>
          </ul>
        </div>

        <div className="list-college-description">
          <ul>
            <li>Name: Prime College</li>
            <li>Location:</li>
            <li>Contact No:</li>
            <li>Email:</li>
          </ul>
        </div>

        <div className="list-college-description">
          <ul>
            <li>Name: St. Xavier's College</li>
            <li>Location: Maitighar</li>
            <li>Contact No:</li>
            <li>Email:</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
