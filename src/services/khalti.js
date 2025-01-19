const axios = require("axios");
const KHALTI_SECRET_KEY = "a20555db9286437bbd7cf857ab9489d8";
const khalti = async (req, res) => {
  try {
    const headers = {
      Authorization: `Key ${KHALTI_SECRET_KEY}`,
      "Content-Type": "application/json",
    };

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
  
  }
};



khalti();
module.exports = { khalti };
