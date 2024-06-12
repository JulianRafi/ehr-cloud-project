import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleMakeAppointmentClick = () => {
    navigate('/make-appointment');
  };

  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listHeader">
            <p className="listTitle">Latest Appointments</p>
            <div className="appointmentBtn">
              <button className="makeAppointmentBtn" onClick={handleMakeAppointmentClick}>Make a new appointment</button>
            </div>
          </div>
          
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
