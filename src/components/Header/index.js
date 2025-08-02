import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-link">
      <h1 className="logo">
        HealthCare App
      </h1>
    </Link>
   <Link to="/" className="logo-link"> <FaHome style={{marginRight: '8px', verticalAlign: 'middle'}} /></Link>
  </div>
)

export default Header
