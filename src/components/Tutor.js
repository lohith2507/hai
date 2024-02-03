import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Tutor = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <center>
      <h2>Welcome Tutor....!</h2>
      <h3><Link to = "/">Back to Login</Link></h3>
      </center>
    </div>
  );
};

export default Tutor;
