import React from 'react';
import './college.css'; 
import nlc2 from "../principal immage/llb.png";
import logo from "../logo/ncc.png";
import nlc1 from "../college image/law2.jpg";
import nlc from "../college image/law.jpg";
const NepalLawCampus = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={nlc} alt="Background Image" />
          <img
            src={nlc1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>
      <section className="section">
        <h2 className="college-name">Nepal Law Campus</h2>
        <br />
        <img
          src={logo}
          alt="College Logo"
          style={{ maxWidth: '200px' }}
        />
        <br />
      </section>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Nepal Law Campus (NLC), is the oldest college of Nepal which is
          imparting legal education in Nepal since 1954. Nepal Law Campus is
          located at the heart of the Capital. The Campus witnessed many ups and
          downs in legal education system. As a constituent campus of Tribhuvan
          University and as an oldest institution imparting legal education, NLC
          has the great contribution and plays significant role in Legal
          Education. NLC is proud of providing highest and competent leadership
          for judiciary and other mechanism within the country and abroad. The
          basic objective of the legal education is to impart knowledge to the
          students seeking the degree of law. To achieve the objective, Nepal Law
          Campus is running after graduation a three year Bachelor of Laws
          (LL.B.), a five year Bachelor of Arts Bachelor of Laws (B.A.LL.B.) and a
          two year Master of Laws (LL.M.) programmes. NLC has highly qualified and
          dedicated faculties including professors, readers and lecturers. The
          Campus produces thousands of law graduates who are engaged in different
          governmental and non-governmental organizations inside the country and
          abroad. Its products have held the highest positions in legal and
          administrative sectors like the Attorney General of Nepal, Chief Justice
          of Nepal, Justices of Supreme Court, judges and judicial officers in
          Nepal, acclaimed academicians in various renowned universities around
          the world and so on.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Arts Bachelor of Laws (BALLB)</span>
          <ul>
            <li>
              Candidates who have completed Higher Secondary Level Education (10+2), PCL or equivalent level are eligible to appear in entrance examination. A candidate passing the entrance exam shall be eligible for admission on the basis of marks obtained in entrance and percentage obtained in higher secondary level or its equivalent level. The total marks shall be 200 and out of which 100 marks allotted for entrance exam and 100 marks reserved for percentage obtained in the higher secondary level (10+2) or equivalence.
            </li>
            <li>
              70 seats are available comprising 35 students in each section. Eleven seats in each section, like two for women, two for Indigenous/Janjati group, two for Madheshi, one for Dalit, one for disabled, one for backward area, and two for foreigners are reserved only for admission purposes. Any type of economic privilege is not available among those students who are eligible for admission in such reserved seats.
            </li>
          </ul>

          <span>2. Bachelor of Laws (LLB)</span>
          <ul>
            <li>
              Those students who have completed a bachelor’s degree in any discipline can be admitted to the Bachelor of Laws (LLB) Course.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Campus Chief</h3>
          <img
            src={nlc2}
            alt="Nepal Law Campus (NLC)"
            className="card-image"
            style={{ maxHeight: '250px' }}
          />
          <div className="card-content">
            <p>
              As a constituent campus of Tribhuvan University and as an oldest institution imparting legal education, NLC has the great contribution and plays significant role in Legal Education.
            </p>
          </div>
          <p className="principal-name">- Campus Chief, Nepal Law Campus (NLC)</p>
        </div>
        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.94189185207!2d85.319448!3d27.7022933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a99d1b172d%3A0x8a91ca426baa63e1!2sNepal%20Law%20Campus!5e0!3m2!1sen!2snp!4v1726664948377!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NepalLawCampus;
