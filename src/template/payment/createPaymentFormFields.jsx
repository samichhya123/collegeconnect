import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentStatus = () => {
  const [status, setStatus] = useState("Loading...");
  const location = useLocation();

  useEffect(() => {

    const query = new URLSearchParams(location.search);
    const paymentStatus = query.get("status"); 

    if (paymentStatus === "Completed") {
      setStatus("Payment Completed!");
    } else if (paymentStatus === "Failed") {
      setStatus("Payment Failed!");
    } else {
      setStatus("Unknown Payment Status");
    }
  }, [location.search]); 

  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default PaymentStatus;
