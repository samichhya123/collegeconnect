import React, { useState } from "react";
import "./PaymentPage.css";
import SideBar from "../SideBar";
import esewa from "../../images/esewa.webp";
import khalti from "../../images/khalti.webp";

const PaymentPage = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <SideBar />
      <div className="payment-page">
        <h2 className="payment-title">Entrance Payment</h2>
        <form className="payment-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName || ""}
              onChange={(e) => handleInputChange(e, "fullName")}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email || ""}
              onChange={(e) => handleInputChange(e, "email")}
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
          <button type="submit" className="payment-button">
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
