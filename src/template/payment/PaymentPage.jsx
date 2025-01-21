import React, { useState } from "react";
import "./PaymentPage.css";
import SideBar from "../../components3/SideBar";
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
    setError(null);

    // Basic validation: Ensure payment method is selected
    if (!formData.paymentMethod) {
      setError("Please select a payment method.");
      setPaymentLoading(false);
      return;
    }

    const paymentDetails = {
      fullName: formData.fullName,
      email: formData.email,
      contact: formData.contact,
      amount: "10000", // Example amount
      paymentMethod: formData.paymentMethod,
    };

    try {
      // Send payment initiation request to your backend
      const response = await axios.post(
        "http://localhost:5000/api/khalti", // Your backend API
        paymentDetails
      );

      // If Khalti payment URL is available, redirect to Khalti payment page
      if (
        response.data &&
        response.data.data &&
        response.data.data.payment_url
      ) {
        window.location.href = response.data.data.payment_url; // Redirect to Khalti URL
      } else {
        setError("Payment initiation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
      setError(
        "An error occurred while processing the payment. Please try again."
      );
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <div>
      <SideBar />
      <div className="payment-page">
        <h2 className="payment-title">Entrance Payment</h2>

        {/* Display error if any */}
        {error && <div className="error-message">{error}</div>}

        <div className="payment-container">
          {/* Payment Form */}
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
              <input
                type="text"
                placeholder="Amount"
                value="Nrs:100"
                readOnly
              />
            </div>
            <div className="form-group payment-options">
              <label>Payment Method</label>
              <div className="payment-methods">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="khalti"
                    onChange={(e) => handleInputChange(e, "paymentMethod")}
                    checked={formData.paymentMethod === "khalti"}
                  />
                  <img
                    src={khalti}
                    alt="Khalti Logo"
                    className="payment-logo"
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="payment-button"
              disabled={paymentLoading}
              // onClick={() => {
              //   if (!paymentLoading) {
              //     window.open(
              //       "https://test-pay.khalti.com/?pidx=h7UFM6pTYp2HtxQi3Qj59Z",
              //       "_blank"
              //     );
              //   }
              // }}
            >
              {paymentLoading ? "Processing..." : "Make Payment"}
            </button>
          </form>

          {/* Information Section */}
          <div className="payment-info">
            <h3>Important Information</h3>
            <p>
              After successfully completing your payment, your admit card for
              the entrance examination will be sent to your registered email
              address. Please ensure all your details are correct before
              proceeding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
