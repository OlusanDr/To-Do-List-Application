import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Welcome to the To-Do App</h1>
      <Link to="/app">
        <button>Enter App</button>
      </Link>
    </div>
  );
};

export default LandingPage;
