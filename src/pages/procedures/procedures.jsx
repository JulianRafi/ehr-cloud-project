import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./procedures.scss";

const Procedures = () => {
    const navigate = useNavigate();
  
    // const handleMakeAppointmentClick = () => {
    //   navigate('/make-appointment');
    // };

    return (
        <div className="procedures">
            <Navbar />
            <div className="proceduresContainer">

            </div>
        </div>
    )
}

export default Procedures;