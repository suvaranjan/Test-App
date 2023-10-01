import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./store/zustand";

export default function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className="footer"
      style={
        isDarkMode
          ? {
              backgroundColor: "#1b1b1b",
              color: "#FAFAFA",
              //   border: "1px solid #4a4a4f",
            }
          : null
      }
    >
      <div className="inside-footer">
        Made with {"❤️"} by{" "}
        <span
          className="suva"
          style={
            isDarkMode
              ? {
                  color: "#bdabfb",
                }
              : null
          }
        >
          <Link className="logo" to="https://suvaranjan.vercel.app/">
            Suvaranjan
          </Link>
        </span>
      </div>
    </div>
  );
}
