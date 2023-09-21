import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useTheme,
  useRead,
  useTimerStore,
  useResultStore,
} from "./store/zustand";

import { iotAllWeeksLength } from "./IOT/IOTComplete";
import { cspAllWeeksLength } from "./CSP/CSPComplete";

export default function Sub() {
  const [maxTimerValue, setMaxTimerValue] = useState(30);

  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { setSubject, setWeek } = useRead();
  const { setTimer } = useTimerStore();
  const { setTotalQuestions } = useResultStore();

  const {
    IOTWeek1Length,
    IOTWeek2Length,
    IOTWeek3Length,
    IOTWeek4Length,
    IOTWeek5Length,
    IOTWeek6Length,
    IOTWeek7Length,
    IOTWeek8Length,
    IOTWeek9Length,
    IOTAllWeeksLength,
  } = iotAllWeeksLength;

  const {
    CSPWeek1Length,
    CSPWeek2Length,
    CSPWeek3Length,
    CSPWeek4Length,
    CSPWeek5Length,
    CSPWeek6Length,
    CSPWeek7Length,
    CSPWeek8Length,
    CSPWeek9Length,
    CSPAllWeeksLength,
  } = cspAllWeeksLength;

  // State to manage the timer value
  const [timerValue, setTimerValue] = useState(20);

  // State to manage the total question value
  const [totalQuestion, setTotalQuestion] = useState(10);

  // State to store the selected subject and week
  const [selectedSubject, setSelectedSubject] = useState("IOT");
  const [selectedWeek, setSelectedWeek] = useState("all");

  // Maintain the maximum values for each subject and week
  const maxValues = {
    IOT: {
      all: IOTAllWeeksLength,
      week1: IOTWeek1Length,
      week2: IOTWeek2Length,
      week3: IOTWeek3Length,
      week4: IOTWeek4Length,
      week5: IOTWeek5Length,
      week6: IOTWeek6Length,
      week7: IOTWeek7Length,
      week8: IOTWeek8Length,
      week9: IOTWeek9Length,
    },
    CSP: {
      all: CSPAllWeeksLength,
      week1: CSPWeek1Length,
      week2: CSPWeek2Length,
      week3: CSPWeek3Length,
      week4: CSPWeek4Length,
      week5: CSPWeek5Length,
      week6: CSPWeek6Length,
      week7: CSPWeek7Length,
      week8: CSPWeek8Length,
      week9: CSPWeek9Length,
    },
  };

  // Handle slider value change for timer
  const handleTimerSliderChange = (event) => {
    setTimerValue(parseInt(event.target.value, 10));
  };

  // Handle slider value change for total questions
  const handleTotalQuestionSliderChange = (event) => {
    setTotalQuestion(parseInt(event.target.value, 10));
  };

  // Function to update totalQuestion based on selected week
  const updateTotalQuestion = () => {
    const maxQuestions = maxValues[selectedSubject][selectedWeek];
    if (totalQuestion > maxQuestions) {
      setTotalQuestion(maxQuestions);
    }
  };

  const updateMaxTimerValue = () => {
    if (selectedWeek === "all") {
      setMaxTimerValue(120);
      setTimerValue(60);
      setTotalQuestion(30);
    } else {
      setMaxTimerValue(30);
      setTimerValue(16);
      setTotalQuestion(8);
    }
  };

  // Update totalQuestion when selectedWeek changes
  useEffect(() => {
    updateTotalQuestion();
    updateMaxTimerValue();
  }, [selectedWeek, selectedSubject]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubject(selectedSubject);
    setWeek(selectedWeek);
    setTimer(timerValue);
    setTotalQuestions(totalQuestion);
    navigate("/test");
  };

  // Dynamically set the maximum value for totalQuestion input
  const maxTotalQuestions = maxValues[selectedSubject][selectedWeek];

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
      <div className="sub-div">
        <div className="box1">
          <h1>NPTEL TEST</h1>
          <p style={isDarkMode ? { color: "#b2b2bf" } : null}>Week 1 to 12</p>
        </div>

        <div className="box2">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="sub">Choose your subject</label>
              <select
                id="sub"
                name="sub"
                style={
                  isDarkMode
                    ? {
                        backgroundColor: "#151717",
                        color: "#b2b2bf",
                        border: "1px solid #4a4a4f",
                      }
                    : null
                }
                onChange={(e) => setSelectedSubject(e.target.value)}
                value={selectedSubject}
              >
                <option value="IOT">Internet of things</option>
                <option value="CSP">Cyber security and privacy</option>
              </select>
            </div>
            <div>
              <label htmlFor="week">Choose a Week</label>
              <select
                id="week"
                name="week"
                style={
                  isDarkMode
                    ? {
                        backgroundColor: "#151717",
                        color: "#b2b2bf",
                        border: "1px solid #4a4a4f",
                      }
                    : null
                }
                onChange={(e) => setSelectedWeek(e.target.value)}
                value={selectedWeek}
              >
                <option value="all">All Weeks</option>
                <option value="week1">Week 1</option>
                <option value="week2">Week 2</option>
                <option value="week3">Week 3</option>
                <option value="week4">Week 4</option>
                <option value="week5">Week 5</option>
                <option value="week6">Week 6</option>
                <option value="week7">Week 7</option>
                <option value="week8">Week 8</option>
                <option value="week9">Week 9</option>
              </select>
            </div>
            <div>
              <label htmlFor="timerValue">Set Timer</label>
              <div
                className="timerdiv sub-timerdiv"
                style={
                  isDarkMode
                    ? {
                        border: "1px solid #4a4a4f",
                      }
                    : null
                }
              >
                <input
                  type="range"
                  name="timerValue"
                  id="timerValue"
                  min="1"
                  max={maxTimerValue}
                  value={timerValue} // Bind the value to the state
                  inputMode="numeric"
                  style={
                    isDarkMode
                      ? {
                          backgroundColor: "#151717",
                          color: "#b2b2bf",
                          border: "none",
                        }
                      : null
                  }
                  onChange={handleTimerSliderChange} // Handle slider changes
                />
                <p>
                  <span>{timerValue}</span> minutes
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="totalQuestion">Set Total Question</label>
              <div
                className="timerdiv sub-timerdiv"
                style={
                  isDarkMode
                    ? {
                        border: "1px solid #4a4a4f",
                      }
                    : null
                }
              >
                <input
                  type="range"
                  name="totalQuestion"
                  id="totalQuestion"
                  min="1"
                  max={maxTotalQuestions} // Set the maximum value dynamically
                  value={totalQuestion} // Bind the value to the state
                  inputMode="numeric"
                  style={
                    isDarkMode
                      ? {
                          backgroundColor: "#151717",
                          color: "#b2b2bf",
                          border: "none",
                        }
                      : null
                  }
                  onChange={handleTotalQuestionSliderChange} // Handle slider changes
                />
                <p>
                  <span>{totalQuestion}</span> questions
                </p>
              </div>
            </div>
            <div className="startBtn">
              <button type="submit">Start</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
