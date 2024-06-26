import React from "react";
import { useRead, useTheme, useSetting } from "./store/zustand";
import { useLocation } from "react-router-dom";

export default function ShowResponse() {
  const location = useLocation();
  const { correctMarkValue } = useSetting();
  let Userresponse = [];
  Userresponse = location.state.response;
  const { subject, week } = useRead();
  const { isDarkMode } = useTheme();
  return (
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
      <div className="box1 custom">
        <h1>
          {subject === "IOT"
            ? "Internet of Things"
            : subject === "CSP"
            ? "Cyber Security and Privacy"
            : "Cloud Computing"}
        </h1>
        <p
          style={
            isDarkMode
              ? {
                  color: "#cfcfcf",
                }
              : null
          }
        >
          {week === "all" ? "All Weeks" : week.replace(/(\d+)/, " $1")}
        </p>
      </div>
      {Userresponse > "" ? (
        <div className="resBox2">
          {Userresponse.map((response, index) => (
            <div className="userResponses" key={index}>
              <div
                className="question"
                style={
                  isDarkMode
                    ? {
                        color: "#d0d0d0",
                      }
                    : {
                        color: "#000",
                      }
                }
              >
                {index + 1} {". "}
                {response.question}
              </div>

              <div className="res-option">
                {Object.keys(response.options).map((optionKey) => (
                  <div
                    className={`resopt ${
                      response.options[optionKey] === response.answer
                        ? "correct"
                        : response.isCorrect === false &&
                          response.userSelectOption ===
                            response.options[optionKey]
                        ? "incorrect"
                        : ""
                    }
                  `}
                    key={optionKey}
                    style={
                      !isDarkMode &&
                      response.options[optionKey] === response.answer
                        ? {
                            background: "#018786",
                            color: "#fff",
                            // fontWeight: "600",
                            border: "1px solid #4a4a4f",
                          }
                        : isDarkMode
                        ? { border: "1px solid #4a4a4f" }
                        : null
                    }
                  >
                    {`${optionKey}. ${response.options[optionKey]}`}
                  </div>
                ))}
              </div>

              <div className="score">
                Score: {response.isCorrect ? correctMarkValue : 0}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="notAttemptDiv">
          You do not attempt any of the questions.
        </div>
      )}
    </div>
  );
}
