import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Tutor from "./components/Tutor";
import Trainee from "./components/Trainee";
// import backgroundimage from "./images";
// import "../App.css";
function App() {
  return (
    <body>
      <div>
        <center>
          <h2>HAI</h2>
        </center>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/trainee" element={<Trainee />} />
          </Routes>
        </Router>
      </div>
    </body>
  );
}
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default App;
