import React from 'react';
import './college.css'; 
import kfa from "../college image/kfa2.jpg";
import kfa1 from "../college image/kfa.JPG";
import logo from "../logo/kfa.png";
import kfa2 from "../principal immage/kfa.png";
const KFA = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={kfa} alt="Background Image" />
          <img src={kfa1} className="img-front" alt="Front Image" />
        </div>
      </header>
      <div className="section">
        <h2 className="college-name">KFA Business School</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxWidth: '200px' }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          With a determined mindset to effectively contribute in the capacity
          building of the Nepalese Business Sector, KFA was established in July
          2001 with major thrust on Management Training, Education and Consulting,
          Agribusiness & Hospitality. Since its establishment, KFA has been
          working in these areas and has been instrumental in developing
          knowledgeable, academically sound & professionally trained human
          resources and also delivering quality management consulting services to
          its valued clients.
          
          KFA Business School, an Academic wing of KFA, was established in the year 2009. Since its inception, KFA Business School has introduced innovative and unique ‘learning methodologies’. With ‘Dual Faculty System (DFS)’ as one of its core delivery mechanisms, KFA has been instrumental in developing much-needed academically sound and practically trained human resources.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor in Hospitality Management</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
            <li>A good command in English Language.</li>
          </ul>
          <span>2. Bachelor of Computer Science (Hons) Network Technology & Cyber Security (BCS)</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
          </ul>
          <span>3. Bachelor (Hons) of Business Administration (BBA)</span>
          <ul>
            <li>Completed higher secondary (10+2)/ A level or equivalent;</li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Chairman</h3>
          <img src={kfa2} alt="KFA" className="card-image" style={{ maxHeight: '200px' }} />
          <div className="card-content">
            <p>
              We established KFA on 4th of July, 2001 and since then have come a
              long way. In the past twenty-four years, like any other business, we
              also witnessed our ups and downs. Started as a Banking Training
              Center, KFA has expanded its wings in diverse areas under Training,
              Education, Consulting and now recently-commenced KFA Agro &
              Processing Unit.
            </p>
          </div>
          <p className="principal-name">-Chairman, KFA Business School</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.8471785695!2d85.337732!3d27.6953012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999c6a3c723%3A0xe315d9255a3c7c10!2sKFA!5e0!3m2!1sen!2snp!4v1726663703659!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KFA Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default KFA;
