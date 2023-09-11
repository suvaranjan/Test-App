import React from "react";
import { useResultStore, useTheme } from "./store/zustand";
import { useLocation, useNavigate } from "react-router-dom";
import ConfettiApp from "./ConfettiApp";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userAttemptsArray } = location.state;
  const { isDarkMode } = useTheme();
  const { status, totalQuestions, attempts, correct, markSecured, totalMark } =
    useResultStore();

  const handleResponse = () => {
    navigate("/response", { state: { response: userAttemptsArray } });
  };
  // console.log(userAttemptsArray);
  return (
    <>
      {status && <ConfettiApp />}
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
              <span className="text-green">{status ? "Pass" : "Fail"}</span>
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
          <div className="item">
            <p>Mark Secured</p>
            <p>
              {markSecured}/{totalMark}
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
          <button onClick={handleResponse}>Show My Response</button>
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
