
export const CreatePaymentFormFields = () => [
  {
    id: 1,
    className: "form-group",
    fields: [
      { label: "Full Name", type: "INPUT_LABEL", name: "fullName", placeholder: "Enter" },
      { label: "Email", type: "INPUT_LABEL", name: "email", placeholder: "Enter" },
    ],
  },
  {
    id: 2,
    className: "payment-details",
    fields: [
      { label: "Payment Amount", type: "INPUT_LABEL", name: "amount", value: "Nrs:100", readOnly: true },
      {
        label: "Payment Method",
        type: "RADIO_GROUP",
        name: "paymentMethod",
        options: [
          { label: "Esewa", value: "esewa"},
          { label: "Khalti", value: "khalti" },
        ],
      },
    ],
  },
];
