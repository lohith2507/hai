import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Tutor from "./components/Tutor";
import Trainee from "./components/Trainee";
// import backgroundimage from "./images";
// import "../App.css";
function App() {
  return (
    <div>
      <Router>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/trainee" element={<Trainee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
