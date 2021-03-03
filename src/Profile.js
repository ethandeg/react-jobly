import {useContext} from "react"
import TokenContext from "./context/TokenContext"
import JoblyApi from "./API"
const Profile = ({logout}) => {
    const {token, setToken} = useContext(TokenContext)
    const handleLogoutButtonClick = () => {
        console.log(JoblyApi.token)
        logout()
        console.log(JoblyApi.token)
    }
    return (
        <>
        <h1>Hello, World! from profile</h1>
        <button className = "btn btn-outline-danger"onClick={handleLogoutButtonClick}>click here to log out</button>
        </>
    )
}

export default Profile