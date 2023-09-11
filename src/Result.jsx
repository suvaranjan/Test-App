import React, { useEffect, useState } from "react";
import { useResultStore, useTheme } from "./store/zustand";
import { useLocation, useNavigate } from "react-router-dom";
import ConfettiApp from "./ConfettiApp";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userAttemptsArray } = location.state;
  const { isDarkMode } = useTheme();
  const {
    status,
    totalQuestions,
    attempts,
    correct,
    markSecured,
    totalMark,
    userPercentage,
  } = useResultStore();

  const [showConfetti, setShowConfetti] = useState(false);

  const handleResponse = () => {
    navigate("/response", { state: { response: userAttemptsArray } });
  };

  useEffect(() => {
    if (status) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // 5 seconds
    }
  }, []);

  return (
    <>
      {showConfetti && <ConfettiApp />}
      <div
        className="container"
        style={
          isDarkMode
            ? {
                backgroundColor: "#151717",
                color: "#FAFAFA",
                border: "1px solid #4a4a4f",
              }
            : null
        }
      >
        <div className="sub-div">
          <div className="box1">
            <h1>
              Result :{" "}
              <span className={`${status ? "pass" : "fail"}`}>
                {status ? "Pass" : "Fail"}
              </span>
            </h1>
          </div>
        </div>

        <div className="setting-box2">
          <div className="item mb">
            <p>Total Question</p>
            <p>{totalQuestions}</p>
          </div>
          <div className="item mb">
            <p>Attempts</p>
            <p>{attempts}</p>
          </div>
          <div className="item mb">
            <p>Correct</p>
            <p>{correct}</p>
          </div>
          <div className="item mb">
            <p>Mark Secured</p>
            <p>
              {markSecured}/{totalMark}
            </p>
          </div>
          <div className="item">
            <p>Your Percentage</p>
            <p>
              {userPercentage}
              {" %"}
            </p>
          </div>
        </div>

        <div className="okayBtn">
          <button
            className={isDarkMode ? "bg-none-dark" : "bg-none"}
            onClick={() => navigate("/test")}
          >
            Retest
          </button>
          <button onClick={handleResponse}>Show Response</button>
          <button
            className={isDarkMode ? "bg-none-dark" : "bg-none"}
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
}
