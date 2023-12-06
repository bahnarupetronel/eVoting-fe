import React, { useState } from "react";

const Label = ({
  title,
  type,
  htmlFor,
  setResponse,
}: {
  title: string;
  type: string;
  htmlFor: string;
  setResponse;
}) => {
  let output;
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    output.htmlFor = event?.target?.value?.toString();
    setMessage(event.target.value.toString());
    console.log(output);
  };
  return (
    <div className="mb-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold text-gray-800"
      >
        {title}
      </label>
      <input
        type={type}
        name={htmlFor}
        className="new-password block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={handleChange}
        value={message}
      />
    </div>
  );
};

export default Label;
