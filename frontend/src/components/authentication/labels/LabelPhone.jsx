import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input";
//import "../../stylesheets/LabelPhone.css"
//de rezolvat input ul de la telefon
const LabelPhone = ({ title, htmlFor, output }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value.toString());
    console.log(message);
    output = event.target.value.toString();
  };
  return (
    <div className="mb-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold text-gray-800"
      >
        {title}
      </label>
      <PhoneInput
        placeholder="Enter phone number"
        values={message}
        onChange={() => handleChange}
        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
};

export default LabelPhone;
