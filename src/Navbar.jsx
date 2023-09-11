import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./store/zustand";

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const navigate = useNavigate();

  const toggleDayNightMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isDarkMode) {
    document.body.style.backgroundColor = "#1b1b1b";
  } else {
    document.body.style.backgroundColor = "#eee";
  }

  return (
    <div
      className="navbar"
      style={
        isDarkMode
          ? {
              backgroundColor: "#151717",
              color: "#FAFAFA",
              border: "1px solid #4a4a4f",
            }
          : { backgroundColor: "#FAFAFA", color: "#050505" }
      }
    >
      <div className="inside-nav">
        <div className="nav-box1">
          <button onClick={() => navigate("/readmode")}>Read Mode</button>
        </div>
        <div className="nav-box1">
          <i className="uil uil-estate" onClick={() => navigate("/")}></i>
        </div>
        <div className="nav-box1">
          <i
            className="uil uil-setting"
            onClick={() => navigate("/settings")}
          ></i>
        </div>
        <div className="nav-box1">
          <i
            className={`uil ${isDarkMode ? "uil-sun" : "uil-moon"}`}
            onClick={toggleDayNightMode}
          ></i>
        </div>
      </div>
    </div>
  );
}
