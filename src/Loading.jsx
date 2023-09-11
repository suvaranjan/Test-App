import React from "react";
import { useTheme } from "./store/zustand";

export default function Loading() {
  const { isDarkMode } = useTheme();
  return (
    <div
      style={
        isDarkMode
          ? {
              backgroundColor: "#151717",
              color: "#FAFAFA",
              border: "1px solid #4a4a4f",
            }
          : null
      }
      className="container"
    >
      <div className="loading-div">Loading...</div>
    </div>
  );
}
