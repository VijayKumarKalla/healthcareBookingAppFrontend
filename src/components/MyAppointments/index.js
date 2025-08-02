
import {useContext} from 'react'
import AppointmentsContext from '../../context/AppointmentsContext'
import Header from '../Header'
import './index.css'

const MyAppointments = () => {
  const {myAppointments} = useContext(AppointmentsContext)

  return (
    <>
    <Header/>
    <div className="appointments-container">
      <h2 className="appointments-heading">My Appointments</h2>
      {myAppointments.length === 0 ? (
        <p className="no-appointments">You have no appointments.</p>
      ) : (
        <ul className="appointments-list">
          {myAppointments.map((appointment, index) => (
            <li key={index} className="appointment-card">
              <h3>{appointment.name}</h3>
              <p><strong>Email:</strong> {appointment.email}</p>
              <p><strong>Date & Time:</strong> {appointment.datetime}</p>
              <p><strong>Doctor:</strong> {appointment.doctorName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

export default MyAppointments
