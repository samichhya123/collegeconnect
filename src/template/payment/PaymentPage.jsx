import React, { useState } from "react";
import "./PaymentPage.css";
import SideBar from "../../components3/SideBar";
import esewa from "../../images/esewa.webp";
import khalti from "../../images/khalti.webp";
import axios from "axios";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    paymentMethod: "",
    college: "",
    program: "",
    registerDate: "",
  });
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState(null); // Track error messages

  const handleInputChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);
    setError(null); // Reset error message

    // Basic validation: Ensure payment method is selected
    if (!formData.paymentMethod) {
      setError("Please select a payment method.");
      setPaymentLoading(false);
      return;
    }

    // Prepare payment details
    const paymentDetails = {
      fullName: formData.fullName,
      email: formData.email,
      contact: formData.contact,
      amount: "10000", // Assuming Nrs:100 for the example
      paymentMethod: formData.paymentMethod,
    };

    try {
      // Send payment details to the backend to initiate payment
      const response = await axios.post(
        "http://localhost:5000/api/khalti", // Ensure backend API is running on this port
        paymentDetails
      );
      const paymentUrl = await response.data.data.payment_url;
      window.location.href = paymentUrl;

      // if (response.data.success) {
      //   // If payment creation is successful, redirect to eSewa or Khalti payment gateway
      //   window.location.href = response.data.redirectUrl; // Redirect to the payment page
      // } else {
      //   setError("Payment creation failed. Please try again.");
      // }
    } catch (error) {
      console.error("Error during payment processing:", error);
      setError(
        "An error occurred while processing the payment. Please try again."
      );
    } finally {
      setPaymentLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <SideBar />
      <div className="payment-page">
        <h2 className="payment-title">Entrance Payment</h2>

        {/* Display error if any */}
        {error && <div className="error-message">{error}</div>}

        <form className="payment-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange(e, "fullName")}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={(e) => handleInputChange(e, "contact")}
              required
            />
          </div>
          <div className="form-group">
            <label>Payment Amount</label>
            <input type="text" placeholder="Amount" value="Nrs:100" readOnly />
          </div>
          <div className="form-group payment-options">
            <label>Payment Method</label>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="esewa"
                  onChange={(e) => handleInputChange(e, "paymentMethod")}
                  checked={formData.paymentMethod === "esewa"}
                />
                <img src={esewa} alt="eSewa Logo" className="payment-logo" />
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="khalti"
                  onChange={(e) => handleInputChange(e, "paymentMethod")}
                  checked={formData.paymentMethod === "khalti"}
                />
                <img src={khalti} alt="Khalti Logo" className="payment-logo" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="payment-button"
            disabled={paymentLoading}
          >
            {paymentLoading ? "Processing..." : "Make Payment"}
          </button>
        </form>

        {/* Display Admit Card if payment is successful */}
        {paymentSuccessful && (
          <div className="admit-card" id="admitCard">
            <div className="title-details">
              <div>
                <h3>{formData.college}</h3>
                <h2>{formData.program} Entrance Examination</h2>
                <h2>ADMIT CARD</h2>
              </div>
              <img
                src={photoPreview || "default-profile-image.png"}
                alt="Profile"
              />
            </div>
            <p>
              <strong>Name:</strong> {formData.fullName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Contact:</strong> {formData.contact}
            </p>
            <p>
              <strong>College:</strong> {formData.college}
            </p>
            <p>
              <strong>Program:</strong> {formData.program}
            </p>
            <p>
              <strong>Register Date:</strong> {formData.registerDate}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
