import React, { useState } from 'react';
import esewaImage from '../images/esewa.png';
import khaltiImage from '../images/khalti.png';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="payment-page">
      <h2 className="payment-title">Entrance Payment</h2>
      <div className="payment-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Payment Amount</label>
          <input type="text" placeholder="Amount" value="Nrs:100" readOnly />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Esewa"
                onChange={() => setPaymentMethod('Esewa')}
                checked={paymentMethod === 'Esewa'}
              />
              <img src={esewaImage} alt="Esewa" className="payment-image" />
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Khalti"
                onChange={() => setPaymentMethod('Khalti')}
                checked={paymentMethod === 'Khalti'}
              />
              <img src={khaltiImage} alt="Khalti" className="payment-image" />
            </label>
          </div>
        </div>
        <button type="submit" className="payment-button">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
