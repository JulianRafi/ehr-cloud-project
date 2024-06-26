import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./makeappointment.scss";

const MakeAppointment = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({ doctor: "", date: "", paymentMethod: "", status: "pending" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const uniqueUsers = new Map(); // Use a Map to store unique users based on email or ID
      querySnapshot.forEach(doc => {
        const user = { id: doc.id, ...doc.data() };
        uniqueUsers.set(user.email, user); // Store users by email to ensure uniqueness
      });
      const usersList = Array.from(uniqueUsers.values()); // Convert Map values back to an array
      setUsers(usersList);
    };
    
    fetchUsers();
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleAppointmentDetailsChange = (e) => {
    const { id, value } = e.target;
    setAppointmentDetails(prevDetails => ({ ...prevDetails, [id]: value }));
  };

  const handleMakeAppointment = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      await addDoc(collection(db, "appointments"), {
        userId: selectedUser.hospitalID,
        patientName: selectedUser.displayName,
        ...appointmentDetails,
        timeStamp: serverTimestamp(),
      });
      navigate("/");
    }
  };

  return (
    <div className="pageContainer">
      <Navbar className="mainNavbar" />
      <div className="makeAppointment">
        <div className="appointmentContainer">
          <div className="top">
            <h1 className="topTitle">Make Appointment</h1>
          </div>
          <div className="bottom">
            <div className="usersList">
              <h2>Select User</h2>
              <ul>
                {users.map(user => (
                  <li 
                    key={user.id} 
                    onClick={() => handleUserSelect(user)}
                    className={selectedUser && selectedUser.id === user.id ? 'selected' : ''}
                  >
                    {user.name} {user.email}
                  </li>
                ))}
              </ul>
            </div>
            {selectedUser && (
              <div className="appointmentForm">
                <h2>Make an appointment for {selectedUser.name}</h2>
                <form onSubmit={handleMakeAppointment}>
                  <div className="formInput">
                    <label>Doctor</label>
                    <input 
                      id="doctor"
                      type="text" 
                      value={appointmentDetails.doctor} 
                      onChange={handleAppointmentDetailsChange} 
                      placeholder="Enter doctor's name" 
                    />
                  </div>
                  <div className="formInput">
                    <label>Date</label>
                    <input 
                      id="date"
                      type="date" 
                      value={appointmentDetails.date} 
                      onChange={handleAppointmentDetailsChange} 
                    />
                  </div>
                  <div className="formInput">
                    <label>Payment Method</label>
                    <input 
                      id="paymentMethod"
                      type="text" 
                      value={appointmentDetails.paymentMethod} 
                      onChange={handleAppointmentDetailsChange} 
                      placeholder="Enter payment method" 
                    />
                  </div>
                  <button type="submit">Make Appointment</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );  
};

export default MakeAppointment;
