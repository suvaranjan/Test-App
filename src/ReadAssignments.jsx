import React from "react";
import { useTheme, useRead } from "./store/zustand";
import { useParams } from "react-router-dom";
import { CSPAllWeeks } from "./CSP/CSPAllWeeks";
import { IOTAllWeeks } from "./IOT/IOTAllWeeks";
import { CCAllWeeks } from "./CC/CCAllWeeks";
import { MISAllWeeks } from "./MIS/MISAllWeeks";
import {
  cspWeek1Ass,
  cspWeek2Ass,
  cspWeek3Ass,
  cspWeek4Ass,
  cspWeek5Ass,
  cspWeek6Ass,
  cspWeek7Ass,
  cspWeek8Ass,
  cspWeek9Ass,
  cspWeek10Ass,
  cspWeek11Ass,
  cspWeek12Ass,
} from "./CSP/CSPComplete";
import {
  iotWeek1Ass,
  iotWeek2Ass,
  iotWeek3Ass,
  iotWeek4Ass,
  iotWeek5Ass,
  iotWeek6Ass,
  iotWeek7Ass,
  iotWeek8Ass,
  iotWeek9Ass,
  iotWeek10Ass,
  iotWeek11Ass,
  iotWeek12Ass,
} from "./IOT/IOTComplete";

import {
  ccWeek1Ass,
  ccWeek2Ass,
  ccWeek3Ass,
  ccWeek4Ass,
  ccWeek5Ass,
  ccWeek6Ass,
  ccWeek7Ass,
  ccWeek8Ass,
  ccWeek9Ass,
  ccWeek10Ass,
  ccWeek11Ass,
  ccWeek12Ass,
} from "./CC/CCComplete";

import {
  misWeek1Ass,
  misWeek2Ass,
  misWeek3Ass,
  misWeek4Ass,
  misWeek5Ass,
  misWeek6Ass,
  misWeek7Ass,
  misWeek8Ass,
  misWeek9Ass,
  misWeek10Ass,
  misWeek11Ass,
  misWeek12Ass,
} from "./MIS/MISComplete";

const IOTweekArrays = {
  week1: iotWeek1Ass,
  week2: iotWeek2Ass,
  week3: iotWeek3Ass,
  week4: iotWeek4Ass,
  week5: iotWeek5Ass,
  week6: iotWeek6Ass,
  week7: iotWeek7Ass,
  week8: iotWeek8Ass,
  week9: iotWeek9Ass,
  week10: iotWeek10Ass,
  week11: iotWeek11Ass,
  week12: iotWeek12Ass,
  all: IOTAllWeeks,
};
const CSPweekArrays = {
  week1: cspWeek1Ass,
  week2: cspWeek2Ass,
  week3: cspWeek3Ass,
  week4: cspWeek4Ass,
  week5: cspWeek5Ass,
  week6: cspWeek6Ass,
  week7: cspWeek7Ass,
  week8: cspWeek8Ass,
  week9: cspWeek9Ass,
  week10: cspWeek10Ass,
  week11: cspWeek11Ass,
  week12: cspWeek12Ass,
  all: CSPAllWeeks,
};

const CCweekArrays = {
  week1: ccWeek1Ass,
  week2: ccWeek2Ass,
  week3: ccWeek3Ass,
  week4: ccWeek4Ass,
  week5: ccWeek5Ass,
  week6: ccWeek6Ass,
  week7: ccWeek7Ass,
  week8: ccWeek8Ass,
  week9: ccWeek9Ass,
  week10: ccWeek10Ass,
  week11: ccWeek11Ass,
  week12: ccWeek12Ass,
  all: CCAllWeeks,
};

const MISweekArrays = {
  week1: misWeek1Ass,
  week2: misWeek2Ass,
  week3: misWeek3Ass,
  week4: misWeek4Ass,
  week5: misWeek5Ass,
  week6: misWeek6Ass,
  week7: misWeek7Ass,
  week8: misWeek8Ass,
  week9: misWeek9Ass,
  week10: misWeek10Ass,
  week11: misWeek11Ass,
  week12: misWeek12Ass,
  all: MISAllWeeks,
};

export default function ReadAssignments() {
  const { subject, week } = useRead();
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  let selectedArray;

  if (subject === "IOT") {
    selectedArray = IOTweekArrays[id] || [];
  } else if (subject === "CC") {
    selectedArray = CCweekArrays[id] || [];
  } else if (subject === "MIS") {
    selectedArray = MISweekArrays[id] || [];
  } else {
    selectedArray = CSPweekArrays[id] || [];
  }

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
              : subject === "CSP"
              ? "Cyber Security and Privacy"
              : subject === "CC"
              ? "Cloud Computing"
              : "Management Information System"}
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
        <div className="m-c">
          {selectedArray.map((item, index) => (
            <div className="userResponses" key={item.id}>
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
                {index + 1}. {item.question}
              </div>
              <div className="res-option">
                {Object.entries(item.options).map(([key, value]) => (
                  <div
                    className={`resopt ${
                      item.answer === value ? "correct" : ""
                    }`}
                    key={key}
                    style={
                      !isDarkMode && item.answer === value
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
