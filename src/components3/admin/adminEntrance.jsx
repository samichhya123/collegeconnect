import React, { useEffect, useState } from "react";
import axios from "axios";

const EntranceExamList = () => {
  const [entranceExams, setEntranceExams] = useState([]);

  useEffect(() => {
    const fetchEntranceExams = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/entrance-exam"
        );
        setEntranceExams(response.data);
      } catch (error) {
        console.error("Error fetching entrance exam forms:", error.message);
      }
    };

    fetchEntranceExams();
  }, []);
  const updatePaymentStatus = async (id) => {
    try {
      await axios.post("http://localhost:5000/api/update-payment-status", {
        id,
        status: "Completed",
      });
      alert("Payment status updated successfully.");
    } catch (error) {
      console.error("Error updating payment status:", error);
    }
  };

  const generateAdmitCard = async (id) => {
    try {
      await axios.post("http://localhost:5000/api/generate-admit-card", { id });
      alert("Admit card generated successfully.");
    } catch (error) {
      console.error("Error generating admit card:", error);
    }
  };

  return (
    <div>
      <h1>Entrance Exam Forms</h1>
      <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
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
            <td>{item.payment_status}</td>
            <td>{item.admit_card_status}</td>
            <td>
              <button onClick={() => updatePaymentStatus(item.id)}>
                Mark as Paid
              </button>
              <button onClick={() => generateAdmitCard(item.id)}>
                Generate Admit Card
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default EntranceExamList;
