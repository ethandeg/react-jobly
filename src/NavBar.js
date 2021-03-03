import {NavLink} from "react-router-dom"
import {useContext} from "react"
import TokenContext from "./context/TokenContext"
const NavBar = () => {
    const {token, setToken} = useContext(TokenContext)
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className = "sidebar-header">
                    <h3>Jobly</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Find your next Rockstar Employee</p>
                    <li>
                        <NavLink to ='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/companies'>Companies</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/jobs'>Jobs</NavLink>
                    </li>
                    {token ? 
                    <li>
                        <NavLink to ='/profile'>Profile</NavLink>
                    </li>
                    : 
                    <>
                    <li>
                        <NavLink to ='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/signup'>Sign Up</NavLink>
                    </li>
                    </>
                    }



                </ul>
            </nav>
        </div>
    )
}

export default NavBar