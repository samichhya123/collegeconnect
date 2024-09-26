import React from 'react';
import './college.css'; 
import padmakanya from "../college image/padma1.jpg";
import padmakanya1 from "../college image/padma2.jpg";
import logo from "../logo/padma.png";
import padmakanya2 from "../principal immage/padma.png";
const PadmaKanya = () => {
  return (
    <div>
      <header>
        <div className="img-area">
          <img src={padmakanya} alt="Background Image" />
          <img src={padmakanya1} className="img-front" alt="Front Image" />
        </div>
      </header>

      <div className="section">
        <h2 className="college-name">Padma Kanya Multiple Campus (PKMC)</h2>
        <br />
        <img src={logo} alt="College Logo" style={{ maxHeight: '150px' }} />
        <br />
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p>
          Padma Kanya Multiple Campus (popularly known as PK Campus) is situated
          in Bagbazar. The campus currently offers higher education degrees in
          Humanities and Social Sciences, Management, and Science. As a
          constituent campus of Tribhuvan University, PKMC has educated women from
          Nepal, India, Sri Lanka, Korea, and a variety of other nations. Students
          come from a variety of geographical and socio-cultural backgrounds. PKMC
          owns 4.6 acres of property. Within the campus grounds, a variety of
          buildings have been created for classrooms, libraries, labs, and
          dormitories, as well as play-grounds. The slogan of this Campus is
          "Quality Education for Women's Empowerment." PK Campus has a proud
          history of more than five decades. Ever since its inception, it has
          stood for quality education particularly to the girls’ students enabling
          them to combat every plight and issue they have to encounter in their
          regular life in society and across the world. The Campus has five
          buildings that meet its infrastructural requirements moderately—two for
          conducting classes and accommodating administrative facilities, one for
          the computer laboratory, physical and e-library, one for girls'
          dormitory with a capacity of 200 students, and an old-hostel building
          that is planned to be used for Bachelor of Hotel Management (BHM)
          program after renovation.
        </p>
      </div>

      <div className="offered-container">
        <h2 className="section-title">Offered Programs and Admission Criteria</h2>
        <div className="offered">
          <span>1. Bachelor of Science</span>
          <ul>
            <li>
              The candidate must have completed 10+2 or equivalent examinations (with Biological Stream) with Minimum 'C' grade in all subjects to be eligible for admission in Bachelor of Science (B.Sc) General program of Tribhuvan University.
            </li>
          </ul>

          <span>2. BBS</span>
          <ul>
            <li>
              Students who have passed 10+2 or equivalent examinations from the recognized academic institutes with second division (securing 45% and above) or 1.8 CGPA are eligible to enroll in this program.
            </li>
          </ul>

          <span>3. BCA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in BCA Entrance Test</li>
          </ul>

          <span>4. Bachelor of Arts</span>
          <ul>
            <li>Students should have secured at least D+ in all subjects in Grade 11 and Grade 12.</li>
            <li>Must have completed the intermediate, Proficiency Certificate or 10+2 level, in Humanities or Science or Management Stream from Tribhuvan University or from any other University or Board recognized by Tribhuvan University.</li>
            <li>Students who have studied any other subject at +2 or PCL level can apply for admission to Major subjects like Rural Development, Social Work, and Sociology in the BA Program.</li>
            <li>Students desirous of studying Journalism and Mass Communication as a Major subject in BA program must have studied Journalism/Mass Communication at +2 or PCL and can apply for Journalism subject.</li>
          </ul>

          <span>5. B.Sc CSIT</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2 in Science (Physics or Biology)</li>
            <li>PASSED in TU IOST Entrance Exam</li>
          </ul>

          <span>6. BBA</span>
          <ul>
            <li>Minimum ‘C’ grade in all subjects in PCL/+2</li>
            <li>PASSED in CMAT Test</li>
          </ul>

          <span>7. B.Sc. Environmental Science</span>
          <ul>
            <li>
              The candidate must have completed 10+2 or equivalent examinations (with Biological Stream) with Minimum 'C' grade in all subjects to be eligible for admission in Bachelor of Science (B.Sc) in Environmental Science program of Tribhuvan University.
            </li>
          </ul>

          <span>8. Bachelors in Information Technology (BIT)</span>
          <ul>
            <li>Passed Proficiency Certificate Level or Equivalent Examination from any faculties taking subjects like English and Mathematics or Computer (Students should have studied at least Mathematics or English) subject of 100 pass marks and secured at least second division.</li>
            <li>Passed grade 12 from Higher Secondary or Secondary School in any stream but must have studied English and Mathematics or Computer Subject of 100/100 marks; students must have taken English, Mathematics, or Computer (Must have studied at least Mathematics or Computer subject) and secured at least C grade. For other subjects, he/she should have passed, securing at least Grade Point (GPA 1.6) and final CGPA of at least 1.8.</li>
            <li>Passed A level examination (studying English and Mathematics or Computer subject of 100/100 marks) securing D Grade with or without small letter.</li>
            <li>Passed Three Years Diploma in second division from CTEVT by studying English and Mathematics or Computer with 100/100 marks each.</li>
          </ul>

          <span>9. B.Sc Microbiology</span>
          <ul>
            <li>
              The candidate must have completed 10+2 or equivalent examinations (with Biological Stream) with Minimum 'C' grade in all subjects to be eligible for admission in Bachelor of Science (B.Sc) in Microbiology program of Tribhuvan University.
            </li>
          </ul>
        </div>
      </div>

      <div className="principal">
        <div className="card">
          <h3 className="card-title">Message from Campus Chief Chairperson</h3>
          <img src={padmakanya2} alt="Padma Kanya Multiple Campus" className="card-image" style={{ maxHeight: '250px' }} />
          <div className="card-content">
            <p>
              As a constituent campus of Tribhuvan University, PKMC has educated women from
              Nepal, India, Sri Lanka, Korea, and a variety of other nations. Students
              come from a variety of geographical and socio-cultural backgrounds. PKMC
              owns 4.6 acres of property. 
            </p>
          </div>
          <p className="principal-name">Campus Chief Chairperson, Padma Kanya Multiple Campus</p>
        </div>

        <div className="map-container">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.3460474335366!2d85.31811507546738!3d27.70659997618292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzIzLjgiTiA4NcKwMTknMTQuNSJF!5e0!3m2!1sen!2snp!4v1726660827673!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PadmaKanya;
