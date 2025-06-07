import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Katherine Breed</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/work" 
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
