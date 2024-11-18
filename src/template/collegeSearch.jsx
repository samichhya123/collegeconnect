import React, { useState } from "react";
import axios from "axios";
const CollegeSearch = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const handleSearch = async () => {
    try {
      const res = await axios.post("http://localhost:3000/recommend", {
        input,
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };
  return (
    <div>
      <h1>Find Your College</h1>
      <input
        type="text"
        placeholder="Type your query (e.g., I want to study engineering in Kathmandu)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {response && (
        <div>
          <h2>{response.message}</h2>
          <ul>
            {response.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default CollegeSearch;
