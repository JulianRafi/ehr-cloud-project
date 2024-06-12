import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

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
