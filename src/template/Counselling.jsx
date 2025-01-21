import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
// import "./adminCollege.css";
// import AdminDashboard from "./AdminDash";

const EntranceExamList = () => {
  const [entranceExams, setEntranceExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    const fetchEntranceExams = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-entrance-exam");
        setEntranceExams(response.data.data);
      } catch (error) {
        console.error("Error fetching entrance exams:", error);
        toast.error("Error fetching entrance exams.");
      } finally {
        setLoading(false);
      }
    };

    fetchEntranceExams();
  }, []);

  const openPopup = (exam) => {
    setSelectedExam(exam);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedExam(null);
  };

  const handleGenerateAdmitCard = async (event) => {
    event.preventDefault();

    const { roll_number, registration_number, date, time, location, contact_number } = event.target;

    try {
      // Send email with EmailJS
      await emailjs.send(
        "service_tfyivv3",
        "template_cak21gi",
        {
          user_name: selectedExam.full_name,
          to_email: selectedExam.email,
          college_name: selectedExam.college_name,
          program_name: selectedExam.program_name,
          roll_number: roll_number.value,
          registration_number: registration_number.value,
          exam_date: date.value,
          exam_time: time.value,
          location: location.value,
          contact_number: contact_number.value,
          profile_image: `http://localhost:5000/${selectedExam.profile_image_path}`, // Pass image URL
        },
        "7az8RfWVPqoSC62Vt"
      );

      toast.success("Admit card sent to user's email successfully.");
      closePopup();
    } catch (error) {
      console.error("Error generating admit card:", error);
      toast.error("Error sending admit card email.");
    }
  };

  if (loading) {
    return <div>Loading entrance exam forms...</div>;
  }

  const hasEntranceExams = entranceExams && entranceExams.length > 0;

  return (
    <div className="colleges-crud-container" style={{ width: "100%", height: "100vh" }}>
      {/* <AdminDashboard /> */}
      <h1 style={{ marginLeft: "18%", fontFamily: "Quicksand", fontWeight: "bold", fontSize: "20px", paddingTop: "15px" }}>
        Manage Entrance Exam
      </h1>
      {!hasEntranceExams ? (
        <p>No entrance exam forms available.</p>
      ) : (
        <table className="entrance-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>College Name</th>
              <th>Program Name</th>
              <th>Payment Status</th>
              <th>Admit Card Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entranceExams.map((item) => (
              <tr key={item.id}>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td>{item.college_name}</td>
                <td>{item.program_name}</td>
                <td>{item.payment_status}</td>
                <td>{item.admit_card_status}</td>
                <td>
                  <button onClick={() => openPopup(item)} style={{ backgroundColor: "#eade5f91", fontSize: "12px" }}>
                    Generate Admit Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isPopupOpen && selectedExam && (
        <div className="modal">
          <div className="modal-content">
            <h2 style={{ fontFamily: "sans-serif", fontSize: "25px", color: "#2980b9" }}>Generate Admit Card</h2>
            <form onSubmit={handleGenerateAdmitCard}>
              <div className="modal-group">
                <label>Full Name</label>
                <input type="text" value={selectedExam.full_name} readOnly />
              </div>
              <div className="modal-group">
                <label>College Name</label>
                <input type="text" value={selectedExam.college_name} readOnly />
              </div>
              <div className="modal-group">
                <label>Course</label>
                <input type="text" value={selectedExam.program_name} readOnly />
              </div>
              <div className="modal-group">
                <label>Registration Number</label>
                <input type="number" name="registration_number" required />
              </div>
              <div className="modal-group">
                <label>Exam Date</label>
                <input type="date" name="date" required min={new Date().toISOString().split("T")[0]} />
              </div>
              <div className="modal-group">
                <label>Exam Time</label>
                <input type="time" name="time" required />
              </div>
              <div className="modal-group">
                <label>Location</label>
                <input type="text" name="location" required />
              </div>
              <div className="modal-group">
                <label>Contact Number</label>
                <input type="text" name="contact_number" required />
              </div>
              <div className="button-group">
                <button type="submit">Generate Admit Card</button>
                <button type="button" onClick={closePopup}>
                  Exit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default EntranceExamList;
