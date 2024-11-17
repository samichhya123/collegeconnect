import React from 'react';
import './EntranceResult.css';

const EntranceResults = () => {
  const results = [
    { name: 'Sejar Limbu', score: '100', status: 'Passed' },
    { name: 'lovely ko xori', score: '10', status: 'Failed' },
  ];

  return (
    <div className="body-result">
      <div className="entrance-container">
        <header className="header">
          <h1>Entrance Exam Result</h1>
          <p>Welcome to the result. Find your entrance exam result below.</p>
        </header>

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
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{result.name}</td>
                  <td>{result.score}</td>
                  <td className={result.status === 'Passed' ? 'pass' : 'fail'}>{result.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default EntranceResults;
