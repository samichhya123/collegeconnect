import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./adminCollege.css";
import AdminDashboard from "./AdminDash";

const EntranceExamList = () => {
  const [entranceExams, setEntranceExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  // Fetch entrance exams from the backend on component mount
  useEffect(() => {
    const fetchEntranceExams = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-entrance-exam");
        setEntranceExams(response.data.data); // Set the fetched data (the 'data' property) to the state
      } catch (error) {
        console.error("Error fetching entrance exams:", error);
        toast.error("Error fetching entrance exams.");
      } finally {
        setLoading(false);
      }
    };

    fetchEntranceExams();
  }, []);

  // Open the popup and prepopulate data
  const openPopup = (exam) => {
    setSelectedExam(exam); // Set the selected exam data
    setIsPopupOpen(true); // Open the popup
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedExam(null); // Clear the selected exam data
  };

  // Handle admit card generation
  const handleGenerateAdmitCard = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/generate-admit-card", {
        id: selectedExam.id,
        roll_number: event.target.roll_number.value,
        registration_number: event.target.registration_number.value,
        date: event.target.date.value,
        time: event.target.time.value,
        location: event.target.location.value,
        contact_number: event.target.contact_number.value,
      });
      toast.success("Admit card generated successfully.");
      closePopup();
    } catch (error) {
      console.error("Error generating admit card:", error);
      toast.error("Error generating admit card.");
    }
  };

  if (loading) {
    return <div>Loading entrance exam forms...</div>;
  }

  // Use a conditional check for empty array
  const hasEntranceExams = entranceExams && entranceExams.length > 0;

  return (
    <div className="colleges-crud-container" style={{ width: "100%", height: "100vh" }}>
      <AdminDashboard/>
      <h1 style={{ marginLeft: "18%", fontFamily: "Quicksand", fontWeight: "bold", fontSize: "20px" ,paddingTop:"15px"}}>
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
                  <button onClick={() => openPopup(item)}style={{backgroundColor:"#eade5f91", fontSize:"12px"}}>
                    Generate Admit Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Popup Form for Admit Card */}
      {isPopupOpen && selectedExam && (
       <div className="modal">
       <div className="modal-content">
         <h2 style={{fontFamily:"sans-serif", fontSize:"25px",color:"#2980b9"}}>Generate Admit Card</h2>
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
             <input
               type="date"
               name="date"
               required
               min={new Date().toISOString().split("T")[0]}
             />
           </div>
           <div className="modal-group">
             <label>Exam Time</label>
             <input type="time" name="time" required />
           </div>
           <div className="modal-group">
             <label>Location</label>
             <input type="text" name="location" required />
           </div>
     
           <div className="textarea-group">
             <label>General Instructions</label>
             <textarea readOnly>
               1. Bring a valid ID card and the admit card to the exam.
               2. Only bring allowed items: pens, pencils, and erasers (unless specified otherwise).
               3. No mobile phones, electronic devices, or study materials are permitted.
               4. Arrive at the exam center at least 30 minutes before the exam starts.
               5. Follow seat assignments and the invigilator’s instructions.
               6. Maintain discipline and follow health and safety protocols (if applicable).
             </textarea>
           </div>
           <div className="textarea-group">
             <label>Exam Guidelines</label>
             <textarea readOnly>
               1. Maintain silence and avoid communicating with other candidates.
               2. Use only the allowed materials, such as pens and non-programmable calculators.
               3. Complete the exam within the allotted time.
               4. Cheating, impersonation, or any unfair practices will lead to disqualification.
               5. Restroom breaks are not allowed if emergency ask permission from the invigilator.
             </textarea>
           </div>
           <div className="modal-group">
             <label>Contact Number of College Admin</label>
             <input type="text" name="contact_number" required />
           </div>
     
           <div className="button-group">
             <button type="submit">Generate Admit Card</button>
             <button type="button" onClick={closePopup}>Exit</button>
           </div>
         </form>
       </div>
     </div>
     
      
      )}

      {/* Toast Container for showing toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default EntranceExamList;
