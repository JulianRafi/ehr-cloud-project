// src/TimelineCalendar.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Assuming you have a Firebase instance named db
import './TimelineCalendar.css';

const TimelineCalendar = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsSnapshot = await getDocs(collection(db, 'appointments'));
        const fetchedAppointments = appointmentsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(fetchedAppointments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const tileContent = ({ date }) => {
    const appointmentsOnDate = appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate.toDateString() === date.toDateString();
    });

    return (
      <div className="event-container">
        {appointmentsOnDate.map(appointment => (
          <div key={appointment.id} className="event">
            {appointment.patientName} - {appointment.doctor}
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="timeline-calendar">
      <Calendar tileContent={tileContent} />
    </div>
  );
};

export default TimelineCalendar;
