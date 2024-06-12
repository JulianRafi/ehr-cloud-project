import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

const MakeAppointment = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({ doctor: "", date: "", paymentMethod: "", status: "pending" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
      navigate("/"); // Navigate to a page that shows all appointments
    }
  };

  return (
    <div className="makeAppointment">
      <h1>Make Appointment</h1>
      <div className="usersList">
        <h2>Select User</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} onClick={() => handleUserSelect(user)}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div className="appointmentForm">
          <h2>Make an Appointment for {selectedUser.name}</h2>
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
  );
};

export default MakeAppointment;
