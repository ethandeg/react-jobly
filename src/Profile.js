import {useContext, useState} from "react"
import {useHistory} from "react-router-dom"
import TokenContext from "./context/TokenContext"
import UserContext from "./context/UserContext"
import JoblyApi from "./API"
const Profile = ({logout}) => {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {firstName, lastName, email, username} = currentUser
    const [formData, setFormData] = useState({firstName, lastName, email})
    const history = useHistory()


    const handleLogoutButtonClick = () => {
        let res = logout()
        if(res.success){
            history.push('/')
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const updateUser = async(e) => {
        e.preventDefault()
        let res = await JoblyApi.updateUser(username, formData)
        setCurrentUser(res)
        setFormData({firstName: res.firstName, lastName: res.lastName, email: res.email})
    }
    return (
        <>
        <h1>Hello, World! from profile</h1>
            <form onSubmit={updateUser}>
                <label htmlFor="email">Email:</label>
                <input type = "text" name="email" id="email" value={formData.email} onChange={handleChange} className="form-control"/>
                <label htmlFor="firstName">First Name:</label>
                <input type = "text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="form-control"/>
                <label htmlFor="lastName">Last Name:</label>
                <input type = "text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="form-control"/>
                <button className='btn btn-outline-primary'>Submit</button>
            </form>
        <button className = "btn btn-outline-danger"onClick={handleLogoutButtonClick}>click here to log out</button>
        </>
    )
}

export default Profile