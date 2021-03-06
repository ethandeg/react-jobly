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
        <div className="container" style={{textAlign: "center"}}>
        <h1 className="my-5 display-1 text-info" style={{display:"block"}}>{username}'s Profile</h1>
        <div className = "col-md-6 col-lg-4 container" style={{fontWeight: 600}}>
        <div className="card">
            <div className="card-body">
            <form onSubmit={updateUser}>
                <div className="form-group">
                    <label>Username:</label>
                    <p class="form-control-plaintext">{username}</p>
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type = "text" name="email" id="email" value={formData.email} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type = "text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                </div>
                <input type = "text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="form-control"/>
                <button className='btn btn-primary w-100 mt-4'>Submit</button>
            </form>
            </div>
            </div>
        </div>
        <button className = "btn btn-outline-danger mt-5"onClick={handleLogoutButtonClick}>click here to log out</button>
        </div>
    )
}

export default Profile