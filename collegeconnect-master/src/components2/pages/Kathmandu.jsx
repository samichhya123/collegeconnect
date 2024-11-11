import React from "react";
import { Link } from "react-router-dom";
import "./kathmandu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ismt from "../college image/ismt1.png";
import orchid from "../college image/OR.jpg";
import british from "../college image/british1.jpg";
import acme from "../college image/acme.jpg";
import kantipur from "../college image/kantipur.jpg";
import ascol from "../college image/ascol1.jpg";
import padmakanya from "../college image/padma1.jpg";
import goldengate from "../college image/ggic.webp";
import kfa from "../college image/kfa2.jpg";
import ncc from "../college image/ncc1.jpg";
import nlc from "../college image/law2.jpg";
import nrc from "../college image/nr.jpg";
import stxavier from "../college image/st xavier.jpg";
import deerwalk from "../college image/deer.jpg";
import kmc from "../college image/kmc2.jpeg";
import herald from "../college image/herald.jpg";
const colleges = [
  {
    name: "ISMT College",
    location: "Tinkune, Kathmandu",
    imgSrc: ismt,
    link: "/-/ismtcollege",
  },
  {
    name: "Orchid International College",
    location: "Gaushala, Bijaya Chowk, Kathmandu",
    imgSrc: orchid,
    link: "/-/orchid",
  },
  {
    name: "The British College",
    location: "Thapathali, Kathmandu",
    imgSrc: british,
    link: "/-/british",
  },
  {
    name: "Acme Engineering College",
    location: "Sitapaila Chowk, Kathmandu",
    imgSrc: acme,
    link: "/-/acme",
  },
  {
    name: "Kantipur International College",
    location: "New Baneshwor, Kathmandu",
    imgSrc: kantipur,
    link: "/-/kantipur",
  },
  {
    name: "Amrit Science Campus - ASCOL",
    location: "Lainchaur, Kathmandu",
    imgSrc: ascol,
    link: "/-/amrit",
  },
  {
    name: "Padma Kanya Multiple Campus (PKMC)",
    location: "BagBazar, Kathmandu",
    imgSrc: padmakanya,
    link: "/-/padmakanya",
  },
  {
    name: "GoldenGate International College",
    location: "Battisputali, Old-Baneshowr,Kathmandu",
    imgSrc: goldengate,
    link: "/-/goldengate",
  },
  {
    name: "KFA Business School",
    location: "Mid Baneshwor, Kathmandu",
    imgSrc: kfa,
    link: "/-/kfa",
  },
  {
    name: "Nepal Commerce Campus",
    location: "Minbhawan, Kathmandu",
    imgSrc: ncc,
    link: "/-/nepalcommerce",
  },
  {
    name: "Nepal Law Campus",
    location: "Exhibition Road, Kathmandu",
    imgSrc: nlc,
    link: "/-/nepallaw",
  },
  {
    name: "Nepal Rastriya College",
    location: "Nepaltar, Balaju, Kathmandu",
    imgSrc: nrc,
    link: "/-/nepalrastriya",
  },
  {
    name: "St. Xavier's College",
    location: "Maitighar, Kathmandu",
    imgSrc: stxavier,
    link: "/-/xaviers",
  },
  {
    name: "Deerwalk Institute of Technology",
    location: "Sifal, Kathmandu",
    imgSrc: deerwalk,
    link: "/-/deerwalk",
  },
  {
    name: "Kathmandu Model College",
    location: "BagBazar, Kathmandu",
    imgSrc: kmc,
    link: "/-/kmc",
  },
  {
    name: "Herald College",
    location: "Bhagwati Marga, Naxal, Kathmandu",
    imgSrc: herald,
    link: "/-/herald",
  },
];

const Kathmandu = () => {
  return (
    <div className="kathmandu-container">
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
export default Kathmandu;
