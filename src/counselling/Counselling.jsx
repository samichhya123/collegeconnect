import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Counselling.css";
import AdminDashboard from "../components3/admin/AdminDash";

export const Counselling = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current["user_name"].value;
    const fromEmail = form.current["from_email"].value;
    const message = form.current["message"].value;
    const toEmail = form.current["to_email"].value;

    if (!userName || !fromEmail || !message || !toEmail) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_tfyivv3",
        "template_cak21gi",
        form.current,
        "7az8RfWVPqoSC62Vt",
        {
          from_name: "College Connect",
          user_name: userName,
          from_email: fromEmail,
          message: message,
          to_email: toEmail,
        }
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("Your Email Has Been Sent Successfully!");
        },
        (error) => {
          console.log("FAILED:", error.text);
          alert("Failed to send the email. Please try again.");
        }
      );
  };

  return (
    <div className="container">
      <AdminDashboard />
      <div className="counselling-container">
        <h2 className="counselling-heading">Counselling Details</h2>
        <form ref={form} onSubmit={sendEmail} className="counselling-form">
          <label className="form-label">Receiver Name</label>
          <input
            type="text"
            name="user_name"
            className="form-input"
            required
            placeholder="Enter Receiver's name"
          />

          <label className="form-label">Sender Email</label>
          <input
            type="email"
            name="from_email"
            className="form-input"
            required
            placeholder="Enter Sender email"
          />

          <label className="form-label">Receiver's Email</label>
          <input
            type="email"
            name="to_email"
            className="form-input"
            required
            placeholder="Enter Receiver's email"
          />

          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-textarea"
            required
            placeholder="Enter your message"
          />

          <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
