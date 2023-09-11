import React from "react";
import { useTheme, useRead } from "./store/zustand";
import { useParams } from "react-router-dom";
import { iotArray } from "./IOT";
import { cspArray } from "./CSP";
import {
  cspWeek1Ass,
  cspWeek2Ass,
  cspWeek3Ass,
  cspWeek4Ass,
  cspWeek5Ass,
  cspWeek6Ass,
} from "./CSP/CSPComplete";
import {
  iotWeek1Ass,
  iotWeek2Ass,
  iotWeek3Ass,
  iotWeek4Ass,
  iotWeek5Ass,
  iotWeek6Ass,
} from "./IOT/IOTComplete";

// import { cspArray } from "./CSP";
// import { iotArray } from "./IOT";

const IOTweekArrays = {
  week1: iotWeek1Ass,
  week2: iotWeek2Ass,
  week3: iotWeek3Ass,
  week4: iotWeek4Ass,
  week5: iotWeek5Ass,
  week6: iotWeek6Ass,
  all: iotArray,
};
const CSPweekArrays = {
  week1: cspWeek1Ass,
  week2: cspWeek2Ass,
  week3: cspWeek3Ass,
  week4: cspWeek4Ass,
  week5: cspWeek5Ass,
  week6: cspWeek6Ass,
  all: cspArray,
};

export default function ReadAssignments() {
  const { subject, week } = useRead();
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  let selectedArray;
  // const selectedArray = weekArrays[id] || [];

  if (subject === "IOT") {
    selectedArray = IOTweekArrays[id] || [];
  } else {
    selectedArray = CSPweekArrays[id] || [];
  }

  console.log(selectedArray);
  return (
    <>
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
        <div
          className="readSub-div"
          style={
            isDarkMode
              ? {
                  border: "1px solid #38383d",
                }
              : null
          }
        >
          <h1>
            {subject === "IOT"
              ? "Internet of Things"
              : "Cyber Security and Privacy"}
          </h1>
          <p>{week === "all" ? "All Weeks" : week.replace(/(\d+)/, " $1")}</p>
        </div>
        <div className="m-c">
          {selectedArray.map((item, index) => (
            <div className="userResponses" key={item.id}>
              <div className="question">
                {index + 1}. {item.question}
              </div>
              <div className="res-option">
                {Object.entries(item.options).map(([key, value]) => (
                  <div
                    className={`resopt ${
                      item.answer === value ? "correct" : ""
                    }`}
                    key={key}
                    style={isDarkMode ? { border: "1px solid #4a4a4f" } : null}
                  >
                    {`${key}. ${value}`}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
