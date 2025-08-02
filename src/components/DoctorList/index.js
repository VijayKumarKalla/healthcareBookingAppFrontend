import {useState, useEffect,useContext} from 'react'
import doctorsData from '../../data/doctors.json'
import DoctorCard from '../DoctorCard'
import AppointmentsContext from '../../context/AppointmentsContext'
import {useNavigate} from 'react-router-dom'


import Header from '../Header'
import './index.css'

const DoctorList = () => {
  const [search, setSearch] = useState('')
  const [filteredDoctors, setFilteredDoctors] = useState([])
const {myAppointments}=useContext(AppointmentsContext)
console.log(myAppointments)
  useEffect(() => {
    setFilteredDoctors(doctorsData)
  }, [])

  const onSearchChange = event => {
    const keyword = event.target.value.toLowerCase()
    setSearch(keyword)
    setFilteredDoctors(
      doctorsData.filter(doctor =>
        doctor.name.toLowerCase().includes(keyword)|| doctor.specialization.toLowerCase().includes(keyword)
      )
    )
  }
   const navigate = useNavigate()

  const handleClick = () => {
    navigate('/myappointments') 
  }

  return (
    <div>
      <Header />
      <div className="doctor-list-container">
        <div className="search-app-container"><input
          type="text"
          placeholder="Search doctors with name or specialization..."
          className="search-bar"
          value={search}
          onChange={onSearchChange}
          
        />
        <button type="button" onClick={handleClick} className='myappBtn'>My Appointments</button>
        </div>

        
        <div className="doctor-grid">
          {filteredDoctors.map(doc => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorList
