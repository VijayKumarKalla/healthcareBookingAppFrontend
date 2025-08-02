import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DoctorList from './components/DoctorList'
import DoctorProfile from './components/DoctorProfile'
import NotFound from './components/NotFound'
import MyAppointments from './components/MyAppointments'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DoctorList />} />
      <Route path="/doctors/:id" element={<DoctorProfile />} />
      <Route path="*" element={<NotFound />} />
       <Route path="/myappointments" element={<MyAppointments />} />
    </Routes>
  </BrowserRouter>
)

export default App