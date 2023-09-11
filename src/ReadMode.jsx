import React from "react";
import { useRead, useTheme } from "./store/zustand";
import { useNavigate } from "react-router-dom";

export default function ReadMode() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { setSubject, setWeek } = useRead();
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedSubject = event.target.sub.value;
    const selectedWeek = event.target.week.value;
    setSubject(selectedSubject);
    setWeek(selectedWeek);
    navigate(`/readmode/${selectedWeek}`);
  };

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
      <div
        className="sub-div"
        style={
          isDarkMode
            ? {
                border: "1px solid #38383d",
              }
            : null
        }
      >
        <div className="box1">
          <h1>Read Mode</h1>
          <p style={isDarkMode ? { color: "#b2b2bf" } : null}>Assignments</p>
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
              >
                <option value="all">All Weeks</option>
                <option value="week1">Week 1</option>
                <option value="week2">Week 2</option>
                <option value="week3">Week 3</option>
                <option value="week4">Week 4</option>
                <option value="week5">Week 5</option>
                <option value="week6">Week 6</option>
              </select>
            </div>

            <div className="startBtn">
              <button type="submit">Read</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
