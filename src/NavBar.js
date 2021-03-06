import {NavLink, useHistory} from "react-router-dom"
import {useContext} from "react"
import TokenContext from "./context/TokenContext"
const NavBar = ({logout}) => {
    const history = useHistory()
    const {token, setToken} = useContext(TokenContext)
    const handleLogout = () => {
        let res = logout()
        if(res.success){
            history.push('/')
        }
    }
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Jobly</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/companies">Companies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
        </li>
        {token
         ?
         <>
         <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
         <li className="nav-item">
            <span className="nav-link" onClick={handleLogout}>Logout</span>
        </li>
        </>
         :
         <> 
         <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>
        </>
         }
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar