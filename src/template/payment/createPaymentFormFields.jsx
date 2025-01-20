import React, { useEffect } from "react";

const PaymentConfirmation = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.toString()); // This will log all the parameters to the console.
    const status = urlParams.get("status");
    const purchaseOrderId = urlParams.get("purchase_order_id");
    const purchaseOrderName = urlParams.get("purchase_order_name");
  
    if (status === "Completed") {
      alert(`Generating Admit Card for ${purchaseOrderName} (Order ID: ${purchaseOrderId})`);
    }
  }, []);

  return (
    <div>
      <h2>Processing Payment...</h2>
      {/* Optionally render any loading or success message */}
    </div>
  );
};

export default PaymentConfirmation;
