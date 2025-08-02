import {Link} from 'react-router-dom'
import './index.css'

const DoctorCard = ({doctor}) => (
  <div className="doctor-card">
    <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
    <h3>{doctor.name}</h3>
    <p>{doctor.specialization}</p>
    <p className={doctor.available ? 'available' : 'unavailable'}>
      {doctor.available ? 'Available' : 'Not Available'}
    </p>
    <Link to={`/doctors/${doctor.id}`} className="view-profile">
      View Profile
    </Link>
  </div>
)

export default DoctorCard
