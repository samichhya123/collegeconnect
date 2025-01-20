import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PracticeQuestion = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/questions").then((response) => {
      setQuestions(response.data);
    });
  }, []);

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log (answers);
    axios
      .post("http://localhost:5000/evaluate", { answers })
      .then((response) => {
        setResult(response.data);
      });
  };

  const handleRetake = () => {
    setAnswers({});
    setResult(null);
    setCurrentQuestionIndex(0);
  };

  const handleGoHome = () => {
    // Replace with actual home page navigation logic
    console.log("Navigating to home...");
    navigate("/nearby-colleges");
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Computer Science Quiz</h1>

      {!result ? (
        <div style={styles.questionWrapper}>
          <h3 style={{ marginBottom: "30px"}}>{currentQuestion.question}</h3>
          {currentQuestion.options.map((option, index) => (
            <div key={index} style={styles.optionWrapper}>
              <label>
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  onChange={() => handleAnswer(currentQuestion.id, index + 1)}
                  checked={answers[currentQuestion.id] === index + 1}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.resultWrapper}>
          <h2>Quiz Results</h2>
          <p>
            You scored {result.score} out of {result.total}
          </p>
        </div>
      )}

      {!result ? (
        <div style={styles.navigationWrapper}>
          {currentQuestionIndex > 0 && (
            <button onClick={handlePrev} style={styles.navButton}>
              Previous
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={handleNext} style={styles.navButton}>
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} style={styles.submitButton}>
              Submit
            </button>
          )}
        </div>
      ) : (
        <div style={styles.resultNavigationWrapper}>
          <button onClick={handleGoHome} style={styles.resultButton}>
            Go to Home
          </button>
          <button onClick={handleRetake} style={styles.resultButton}>
            Retake Questions
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  questionWrapper: {
    marginBottom: "30px",
  },
  optionWrapper: {
    marginBottom: "10px",
  },
  navigationWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultNavigationWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
  },
  navButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  resultButton: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  resultWrapper: {
    marginTop: "20px",
    textAlign: "center",
  },
};

export default PracticeQuestion;