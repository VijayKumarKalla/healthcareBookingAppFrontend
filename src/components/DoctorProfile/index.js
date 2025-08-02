import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Header from '../Header'
import AppointmentForm from '../AppointmentForm'
import getDoctorById from '../../utils/getDoctorById'
import './index.css'

const DoctorProfile = () => {
  const {id} = useParams()
  const [doctor, setDoctor] = useState(null)

  useEffect(() => {
    const doc = getDoctorById(id)
    setDoctor(doc)
  }, [id])

  if (!doctor) return <p className="loading-text">Loading...</p>

  return (
    <div>
      <Header />
      <div className="profile-container">
        <img
          src={doctor.imageUrl}
          alt={doctor.name}
          className="profile-image"
        />
        <div className="details">
          <h2>{doctor.name}</h2>
          <p>Specialization: {doctor.specialization}</p>
          <p>
            Status:{' '}
            <span className={doctor.available ? 'available' : 'unavailable'}>
              {doctor.available ? 'Available' : 'Not Available'}
            </span>
          </p>
        </div>
      </div>
      <AppointmentForm doctorName={doctor.name} />
    </div>
  )
}

export default DoctorProfile
