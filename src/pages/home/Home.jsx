import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.scss";


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /login
    navigate('/login');
  }, [navigate]);

  return (
    <div className="home">
      <div className="homeContainer">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default Home;
