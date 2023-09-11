import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sub from "./Sub";
import Test from "./Test";
import Settings from "./Settings";
import Result from "./Result";
import ShowResponse from "./ShowResponse";
import ReadMode from "./ReadMode";
import ReadAssignments from "./ReadAssignments";
import Footer from "./Footer";
import Confetti from "./ConfettiApp";
import ConfettiApp from "./ConfettiApp";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sub />
              <Footer />
            </>
          }
        />
        <Route
          path="/test"
          element={
            <>
              <Test />
              <Footer />
            </>
          }
        />
        <Route
          path="/confetti"
          element={
            <>
              <ConfettiApp />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <Settings />
              <Footer />
            </>
          }
        />
        <Route
          path="/result"
          element={
            <>
              <Result />
              <Footer />
            </>
          }
        />
        <Route path="/response" element={<ShowResponse />} />
        <Route
          path="/readmode"
          element={
            <>
              <ReadMode />
              <Footer />
            </>
          }
        />
        <Route path="/readmode/:id" element={<ReadAssignments />} />
      </Routes>
    </>
  );
}

export default App;
