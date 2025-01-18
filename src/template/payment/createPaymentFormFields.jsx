import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentStatus = () => {
  const [status, setStatus] = useState("");
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const paymentStatus = query.get("payment_status");

    if (paymentStatus === "Successful") {
      setStatus("Payment Successful!");
    } else {
      setStatus("Payment Failed!");
    }
  }, [location.search]);

  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default PaymentStatus;
