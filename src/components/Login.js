import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center mt-3 
     "
    >
      <center>
        <h2>Login to HAI</h2>
        <h3>
          <Link to="/Tutor">Tutor</Link>
          {"   "}
          <Link to="/Trainee">Trainee</Link>
        </h3>
      </center>
    </div>
  );
};

export default Login;
