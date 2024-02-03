import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Trainee = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <center>
      <h2>Welcome Trainee....!</h2>
      <h3>Are you excited to learn...!</h3>
      <h3><Link to = "/">Back to Login</Link></h3>
      </center>
    </div>
  );
};

export default Trainee;
