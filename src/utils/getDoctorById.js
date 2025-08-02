import doctors from '../data/doctors.json'

const getDoctorById = id => doctors.find(doc => doc.id === id)

export default getDoctorById