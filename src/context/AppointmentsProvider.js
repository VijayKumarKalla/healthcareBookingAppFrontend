// src/context/UserProvider.js
import React, {useState} from 'react'
import AppointmentsContext from './AppointmentsContext'

const AppointmentsProvider = ({children}) => {
  const [myAppointments, setAppointments] = useState([])

  
  const addAppointments = appo => {
    setAppointments(prev => [...prev, appo])
  }

 
  const deleteAppointment = id => {
    setAppointments(prev => prev.filter(appo => appo.id !== id))
  }

 

  return (
    <AppointmentsContext.Provider value={{myAppointments, addAppointments, deleteAppointment}}>
      {children}
    </AppointmentsContext.Provider>
  )
}

export default AppointmentsProvider
