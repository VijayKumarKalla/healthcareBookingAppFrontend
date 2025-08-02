import {useState} from 'react'
import React, {useContext} from 'react'
import AppointmentsContext from '../../context/AppointmentsContext'
import './index.css'

const AppointmentForm = ({doctorName}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const {addAppointments} = useContext(AppointmentsContext)

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    addAppointments({...formData,doctorName})
    setSubmitted(true)
  }

  return (
    <div className="form-container">
      <h3>Book Appointment with  {doctorName}</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
          <button type="submit">Confirm Appointment</button>
        </form>
      ) : (
        <p className="confirmation">
          Appointment confirmed for {formData.name} on {formData.datetime}
        </p>
      )}
    </div>
  )
}

export default AppointmentForm
