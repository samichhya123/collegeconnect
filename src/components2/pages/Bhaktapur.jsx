import React from "react";
import { Link } from "react-router-dom";
import "./kathmandu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import samridhi from "../react/college image/samriddhi.jpg";
import bmc from "../react/college image/bmc1.jpeg";
import khwopa from "../react/college image/khowpa.jpg";
import swastik from "../react/college image/swastik1.jpg";
import nec from "../react/college image/nepal enginerring college.jpg";
import kct from "../react/college image/kct.jpg";
import seabird from "../react/college image/seabird.jpg";
import chanakya from "../react/college image/chankaya.jpg";

const colleges = [
  {
    name: "Samriddhi College",
    location: "Lokanthali-16, Madhyapur Thimi, Bhaktapur",
    imgSrc: samridhi,
    link: "/-/samridhi",
  },
  {
    name: "Bhaktapur Multiple Campus",
    location: "Doodhpati-17, Bhaktapur",
    imgSrc: bmc,
    link: "/-/BhaktapurMulitpleCampus",
  },
  {
    name: "Khwopa Engineering College",
    location: "Libali, Bhaktapur",
    imgSrc: khwopa,
    link: "/-/khwopa",
  },
  {
    name: "Swastik College",
    location: "Madhyapur Thimi -3, Chardobato, Bhaktapur",
    imgSrc: swastik,
    link: "/-/swastik",
  },
  {
    name: "Nepal Engineering College (nec)",
    location: "Changunarayan, Changunarayan, Bhaktapur",
    imgSrc: nec,
    link: "/-/nec",
  },
  {
    name: "Kathmandu College Of Technology",
    location: "Lokanthali, Madhyapur Thimi, Bhaktapur",
    imgSrc: kct,
    link: "/-/kct",
  },
  {
    name: "Seabird International College",
    location: "Shankhadhar Chowk, Bhaktapur",
    imgSrc: seabird,
    link: "/-/seabird",
  },
  {
    name: "Chanakya College of Management",
    location: "Madhyapur Thimi, Bhaktapur",
    imgSrc: chanakya,
    link: "/-/chanakya",
  },
];

const Bhaktapur = () => {
  return (
    <div className="bhaktapur-container">
      {colleges.map((college, index) => (
        <div className="ktm-card" key={index}>
          <img src={college.imgSrc} alt={college.name} />
          <div className="ktm-card-content">
            <h3>{college.name}</h3>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> {college.location}
            </p>
            <Link to={college.link} className="ktm-button">
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bhaktapur;
