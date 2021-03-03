import {useContext} from "react"
import {useHistory} from "react-router-dom"
import TokenContext from "./context/TokenContext"
import UserContext from "./context/TokenContext"
import JoblyApi from "./API"
const Profile = ({logout}) => {
    const history = useHistory()
    const {token, setToken} = useContext(TokenContext)
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const handleLogoutButtonClick = () => {
        let res = logout()
        if(res.success){
            history.push('/')
        }
    }
    console.log(currentUser)
    console.log(token)
    console.log(setCurrentUser)
    return (
        <>
        <h1>Hello, World! from profile</h1>
        {currentUser ? <h1>{currentUser.firstName}</h1>: <h1>Loading...</h1>}
        <button className = "btn btn-outline-danger"onClick={handleLogoutButtonClick}>click here to log out</button>
        </>
    )
}

export default Profile