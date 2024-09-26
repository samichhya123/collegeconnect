import React from 'react';
import './college.css';
import kist from "../college image/kist.png";
import kist1 from "../college image/kist_building.jpg";
import logo from "../logo/kist.png";
import kist2 from "../principal immage/kist.png";
const KistCollege = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={kist} alt="Background Image" />
          <img
            src={kist1}
            className="img-front"
            alt="Front Image"
          />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Kist College</h2>
        <br />
        <img src={logo} alt="College Logo" />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Established in 1995, KIST is now a top +2 college in Nepal that offers high standard NEB + 2 Science & Management courses, a range of top quality Bachelor’s degrees – BBA, BIM, BIT, BBS & BSc Microbiology – followed by excellent Master’s degrees – MBS, MSc Microbiology & MIT.
          <br />
          <br />
          It is well-known to most educators and students along with their families that our educational delivery, at the different levels we cover, is as good as the best anywhere! This is due to our dedicated, expert faculty and their unique learning-teaching. Also, we believe in student intake interlinked to academic excellence. Our ideal education yields top results in key examinations.
          <br />
          <br />
          KIST incontestably has a fine academic atmosphere with a pragmatic, student-centered, caring approach. First-rate amenities on campus plus well-managed transport facilities attract the best students. Also, a cafeteria, and separate boys' and girls' hostels are available at this centrally-located campus. Regular, quick public transport is always available a few hundred yards away.
          <br />
          <br />
          We provide superb facilities such as a modern, well-stocked library with a useful adjunct, an e-library, serving all learning needs, and probably the best well-equipped laboratories. Notably, this institution has a purpose-built, well-engineered, and safe infrastructure so that everything on the campus reinforces student education and their overall development.
          <br />
          <br />
          The College, although situated downtown, exudes peace and positivity with its pleasant and peaceful premises next to the salubrious large pond Kamalpokhari. It has a spacious property most suitable for both indoor and outdoor activities. Ample opportunities for extracurricular or co-curricular activities or events are available so that students have a happy campus life.
          <br />
          <br />
          Above all, remarkable is the College ethos for all it does to transform students at all levels: +2, Bachelor's, and Master's. We ensure these goals through pastoral care, academic & career counseling, and the nurturing of academic skills alongside life-skills. KIST is a highly successful motivator for furthering your educational or career objectives and life goals.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Information Technology (BIT):</span>
          <ul>
            <li>
              The Candidate must have passed +2 or Equivalent with a Mathematics subject of 100 marks with D+ grade from any recognized academic institution and minimum 45% marks or D+ grade in each subjects with GPA 2.00 in aggregate.
            </li>
          </ul>

          <span>2. BSc Microbiology</span>
          <ul>
            <li>
              Applicants must have taken 200 marks full course of Biology. They need at least a second division in +2 or an equivalent exam. For students with results in grading system, they must have secured at least “C” grade in each subject. For A level students, they must have minimum “E” grade.
            </li>
          </ul>

          <span>3. Bachelor of Information Management (BIM)</span>
          <ul>
            <li>60% CMAT Entrance Score, 30% of 10+2 score and 10% interview</li>
          </ul>

          <span>4. Bachelor of Computer Application (BCA)</span>
          <ul>
            <li>Minimum D grade in each subject of grade 11 and 12 with a CGPA 1.8 or more.</li>
            <li>Minimum score of second division marks in 10+2, PCL, or equivalent in any discipline.</li>
            <li>
              Students who have passed grade 11 and are waiting for grade 12 results can also apply. However, they have to submit all the required documents at the time of admission.
            </li>
          </ul>

          <span>5. Bachelor in Business Studies (BBS)</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from the recognized academic institutes with second division (securing 45% and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message From Director</h3>
          <img
            src={kist2}
            alt="Kist College"
            className="card-image"
            style={{ maxHeight: '200px' }}
          />
          <div className="card-content">
            <p>
              This trustworthy +2 college has earned a name for itself in the formal education sector of our country. Students often ace Board exams and also make significant contributions in extracurricular activities. Our graduates are popular everywhere. Further, KIST alumni are spread worldwide in reputed universities or doing prestigious jobs as competent professionals.
            </p>
          </div>
          <p className="principal-name">- Director, Kist College</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14128.726756827276!2d85.325205!3d27.711676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f4a71326b%3A0x1e54c69290d012c6!2z4KSV4KS_4KS34KWN4KSfIOCkleCksuClh-CknCDgpKTgpKXgpL4g4KSu4KS-LuCkteCkvy4!5e0!3m2!1sen!2snp!4v1726932805989!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default KistCollege;
