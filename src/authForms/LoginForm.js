import {useState} from "react"
import {useHistory} from "react-router-dom"
import JoblyApi from "../API"
const LoginForm = ({login}) => {
    const INITIAL_STATE = {username: '', password:''}
    const history = useHistory()
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        let res = await login(formData)
        if(res.success){
            history.push('/')
        }
    }
    return (
        <>
        <div className="container" style={{textAlign: "center"}}>
        <h1 className="my-5 display-1 text-info" style={{display:"block"}}>Login</h1>
        <div className = "col-md-6 col-lg-4 container" style={{fontWeight: 600}}>
        <div className="card">
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type = "text" name="username" id="username" value={formData.username} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type = "password" name="passwordfirstName" id="password" value={formData.password} onChange={handleChange} className="form-control"/>
                </div>
                <button className='btn btn-primary w-100 mt-4'>Submit</button>
            </form>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default LoginForm