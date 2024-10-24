import React from 'react';
import './college.css';
import himalaya from "../lalitpur/college image/himalaya_college_of_engineering_for_top-notch_engineering_education-crop-c0-5__0-5-1280x720-70.jpg";
import himalaya1 from "../lalitpur/college image/HCOE_Photos_2.jpg";
import logo from "../lalitpur/logo/himal.png";
import himalaya2 from "../lalitpur/principal images/himal.png";
const HimalayaCollege = () => {
    return (
        <div>
            <header>
                <div className="img-area">
                    <img src={himalaya} alt="Background Image" />
                    <img src={himalaya1} className="img-front" alt="Front Image" />
                </div>
            </header>
            <div className="section">
            <img src={logo} alt="College Logo" style={{ maxWidth: '200px' }} />  <h2 className="college-name">Himalaya College Of Engineering</h2>
               
            </div>

            <div className="container">
                <h2 className="section-title">About Us</h2>
                <p>
                    Himalaya College of Engineering (HCOE) is affiliated to Tribhuvan University (TU), Nepal. Established in June 2000 AD, it is producing qualified engineers who are the backbone of the nation. The aim of the College is to provide quality engineering education and produce competent engineering graduates. The bachelor of engineering of the Institute of Engineering (IOE), TU being implemented in the College are in Computer, Electronics and Communication, and Civil and Bachelor of Architecture, and B Sc in Computer Science and Information Technology (BSc CSIT) of Institute of Science and Technology. The college has been managed by a strong team of professionals and academicians who possess enough experience in educational networks for a long time. The College has been associated with KMC Educational Network since May 2007 and it has expanded programmes, and gained strength since its association with the network.
                    The College is located at Chyasal, Lalitpur which is an easy access from all directions. The college is extended in an area of 19 and a half Ropani with a seven-storey building and other five lab buildings. All the academic and administrative programmes as per the standard laid down by IOE have been maintained in this infrastructure. As a part of teaching-learning processes, seminars, workshops and training are frequently conducted through the semesters with field visits, project work, and field works. So, the college assures quality education required for the students in the present context, and assists them in pursuing their professional and educational goals.
                </p>
            </div>

            <div className="offered-container">
                <h2 className="section-title">Offered Programs and Admission Criteria</h2>
                <div className="offered">
                    <span>1. Bachelor of Architecture (B Arch)</span>
                    <ul>
                        <li>The students are required to appear in an entrance exam held by Tribhuvan University</li>
                        <li>Students who pass these tests are then allowed to be admitted into TU-affiliated colleges on a merit basis.</li>
                    </ul>

                    <span>2. Bachelor of Civil Engineering</span>
                    <ul>
                        <li>The students who have passed the entrance examination conducted by IOE are eligible for admission in IOE constituent campuses and affiliated colleges on merit basis.</li>
                    </ul>

                    <span>3. BCA</span>
                    <ul>
                        <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
                        <li>PASSED in BCA Entrance Test</li>
                    </ul>

                    <span>4. Bachelor of Computer Engineering</span>
                    <ul>
                        <li>Should have successfully completed twelve years of schooling in the science stream or equivalent from any university, board, or institution recognized by TU.</li>
                        <li>Should have secured a minimum of second division in their +2 or equivalent and should have successfully passed the entrance examination conducted by TU securing at least 35% marks.</li>
                    </ul>

                    <span>5. B.Sc CSIT</span>
                    <ul>
                        <li>Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or Biology)</li>
                        <li>PASSED in TU IOST Entrance Exam</li>
                    </ul>
                </div>
            </div>

            <div className="principal">
                <div className="card">
                    <h3 className="card-title">Message From Principal</h3>
                    <img src={himalaya2} alt="Himalaya" className="card-image" style={{ maxHeight: '250px' }} />
                    <div className="card-content">
                        <p>Himalaya College of Engineering (HCOE) is dedicated to academic excellence and growth. Offering programs in Computer Engineering, Civil Engineering, Electronics and Information Engineering, Architecture, and BSc CSIT, the college has developed advanced labs and facilities. HCOE's high pass rate, successful graduates, and research opportunities reflect its commitment to quality education.</p>
                    </div>
                    <p className="principal-name">- Principal, Himalaya College of Engineering</p>
                </div>

                <div className="map-container">
                    <h2>Location Map</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.214163074053!2d85.3327667!3d27.6770118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c18b827885%3A0x4207ecf181978d2e!2sHimalaya%20College%20of%20Engineering!5e0!3m2!1sen!2snp!4v1726503275161!5m2!1sen!2snp"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default HimalayaCollege;
