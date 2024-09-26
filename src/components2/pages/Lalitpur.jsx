import React from "react";
import "./kathmandu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import kathford from "../lalitpur/images/6f6b2eb8ea71eb29f591ce3fd704b326-490.jpg";
import ncit from "../lalitpur/images/ncit.jpg";
import academia from "../lalitpur/images/academia.jpg";
import himalaya from "../lalitpur/images/himalaya.jpg";
import quest from "../lalitpur/images/quest.jpg";
import ritz from "../lalitpur/images/ritz.jpg";
import sagarmatha from "../lalitpur/images/sagarmatha engineering.jpg";
import campion from "../lalitpur/images/campion.jpg";
import lec from "../lalitpur/images/lalitpur.jpg";
import patan from "../lalitpur/images/patan.jpg";
import janakpur from "../lalitpur/images/janakpur.jpg";
import nagarjuna from "../lalitpur/college image/nagarjuna.png";
import vedas from "../lalitpur/images/vedas.jpg";
import national from "../lalitpur/images/national.jpg";
import acca from "../lalitpur/images/acca.jpg";
import virinchi from "../lalitpur/images/virinchi.png";
const colleges = [
  {
    name: "Kathford International College Of Engineering And Management",
    location: "Balkumari, Lalitpur",
    image: kathford,
    link: "/-/kathford",
  },
  {
    name: "Nepal College Of Information Technology (NCIT)",
    location: "Balkumari, Lalitpur",
    image: ncit,
    link: "/-/ncit",
  },
  {
    name: "Academia International College",
    location: "GWARKO CHOWK, Lalitpur",
    image: academia,
    link: "/-/academia",
  },
  {
    name: "Himalaya College Of Engineering",
    location: "Chyasal-9, Lalitpur",
    image: himalaya,
    link: "/-/himalaya",
  },
  {
    name: "Quest International College",
    location: "Gwarko, Lalitpur",
    image: quest,
    link: "/-/quest",
  },
  {
    name: "Ritz College Of Engineering And Management",
    location: "Balkumari, Lalitpur",
    image: ritz,
    link: "/-/ritz",
  },
  {
    name: "Sagarmatha Engineering College",
    location: "Sanepa, Lalitpur",
    image: sagarmatha,
    link: "/-/sagarmatha",
  },
  {
    name: "Campion College",
    location: "Sanepa, Lalitpur",
    image: campion,
    link: "/-/campion",
  },
  {
    name: "Lalitpur Engineering College",
    location: "Chakupat, Patan Dhoka, Lalitpur",
    image: lec,
    link: "/-/lalitpur",
  },
  {
    name: "Patan Multiple Campus",
    location: "Patandhoka, Lalitpur",
    image: patan,
    link: "/-/patan",
  },
  {
    name: "Janakpur Engineering College",
    location: "Kupondole, Lalitpur",
    image: janakpur,
    link: "/-/janakpur",
  },
  {
    name: "Nagarjun College Of Information Technology",
    location: "Sankhamul-09 (near Shanka Park), Lalitpur",
    image: nagarjuna,
    link: "/-/nagarjuna",
  },
  {
    name: "Vedas College",
    location: "Jawalakhel, Lalitpur",
    image: vedas,
    link: "/-/vedas",
  },
  {
    name: "National College Of Engineering",
    location: "Talchikhel Bishal Chowk, Lalitpur",
    image: national,
    link: "/-/national",
  },
  {
    name: "Academy of Culinary Arts and Hospitality Management",
    location: "Lagankhel, Lalitpur",
    image: acca,
    link: "/-/culinaryacademy",
  },
  {
    name: "Virinchi College",
    location: "Kumaripati, Lalitpur",
    image: virinchi,
    link: "/-/virinchi",
  },
];

const Lalitpur = () => {
  return (
    <div className="lalitpur-container">
      {colleges.map((college, index) => (
        <div className="ktm-card" key={index}>
          <img src={college.image} alt={college.name} />
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
export default Lalitpur;
