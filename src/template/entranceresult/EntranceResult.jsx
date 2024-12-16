import React, { useEffect, useState } from "react";
import "./EntranceResult.css";
import SideBar from "../SideBar";
import axios from "axios";

const EntranceResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/entrance-results")
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching entrance results:", error);
      });
  }, []);

  return (
    <div>
      <SideBar />
      <div className="body-result">
        <div className="entrance-container">
          <div className="header-entranceresult">
            <h1>Entrance Exam Result</h1>
            <p>Welcome to the result. Find your entrance exam result below.</p>
          </div>
          <section className="results-table">
            <h2>Candidate Result</h2>
            <table>
              <thead>
                <tr>
                  <th>S.N.</th>
                  <th>Candidate Name</th>
                  <th>Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={result.id}>
                    <td>{index + 1}</td>
                    <td>{result.name}</td>
                    <td>{result.score}</td>
                    <td
                      className={result.status === "Passed" ? "pass" : "fail"}
                    >
                      {result.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EntranceResults;
