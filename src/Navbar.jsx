import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useMusic } from "./store/zustand";
import toast, { Toaster } from "react-hot-toast";

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const musicSrc = "../src/music.mp3";
  const audioRef = useRef(null);
  const { isMusic, setIsMusic } = useMusic();

  const navigate = useNavigate();

  const toggleDayNightMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMusic = () => {
    if (!isMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsMusic(!isMusic);
  };

  if (isDarkMode) {
    document.body.style.backgroundColor = "#1b1b1b";
  } else {
    document.body.style.backgroundColor = "#eee";
  }

  return (
    <>
      {" "}
      <Toaster
        toastOptions={{
          style: {
            background: isDarkMode ? "#151717" : null,
            color: isDarkMode ? "#fff" : null,
            border: isDarkMode ? "1px solid #38383d" : null,
          },
        }}
      />
      <div
        className="navbar"
        style={
          isDarkMode
            ? {
                backgroundColor: "#151717",
                color: "#FAFAFA",
                borderBottom: "1px solid #4a4a4f",
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
          <div className="nav-box1">
            <i
              className={`uil ${
                isMusic ? "uil-music-note" : "uil-music-tune-slash music"
              }`}
              // className="uil uil-music-tune-slash music"
              onClick={handleMusic}
            ></i>
          </div>
          <audio ref={audioRef} src={musicSrc} loop></audio>
        </div>
      </div>
    </>
  );
}
