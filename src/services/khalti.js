const axios = require("axios");

// console.log(process.env.KHALTI_SECRET_KEY);
const KHALTI_SECRET_KEY = "a20555db9286437bbd7cf857ab9489d8";
const khalti = async (req, res) => {
  try {
    const headers = {
      Authorization: `Key ${KHALTI_SECRET_KEY}`,
      "Content-Type": "application/json",
    };
    // const { amount,purchase_order_id,purchase_order_name, customer_info } = req.body;
    const formData = {
      return_url: "http://localhost:5000/Colleges",
      website_url: "http://localhost:5000",
      amount: 10000,
      purchase_order_id: 1,
      purchase_order_name: "purchase_order_name",
      customer_info: {
        name: "collegeConnect"
      },
    };
    const response = await axios.post(
      "https://a.khalti.com/api/v2/epayment/initiate/",
      formData,
      {
        headers,
      }
    );
    console.log(response.data);
    if (response.data) {
      // res.json({
      //     message: "khalti success",
      //     payment_method: "khalti",
      //     data: response.data,
      //   });
    } else {
      // res.json({
      //     message: "khalti unsuccess",
      //     payment_method: "khalti",
      //     data: "",
      //   });
    }
  } catch (err) {
    console.log(err);
    // res.send(err);
  }
};

// const khaltiCallback = async (req, res) => {
//   console.log("here");
//   if (!req.khalti || !req.khalti.pidx) {
//     console.log("khalti not init");
//     return res
//       .status(400)
//       .json({ message: "Khalti payment not initiated properly" });
//   }
//   const { pidx } = req.khalti.pidx;
//   const payload = {
//     pidx: pidx,
//   };
//   const headers = {
//     Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
//     "Content-Type": "application/json",
//   };
//   const response = await axios.post(
//     "https://a.khalti.com/api/v2/epayment/lookup/",
//     payload,
//     { headers }
//   );
//   console.log(response.data);
//   res.send("heelo");
// };

khalti();
module.exports = { khalti };
