import {useState} from "react"
import {useHistory} from "react-router-dom"
const SignUpForm = ({signUp}) => {
    const history = useHistory()
    const INITIAL_STATE = {username: '', password:'', firstName:'', lastName:'', email:''}
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
        let res = await signUp(formData)
        if(res.success){
            history.push('/')
        }
        return res
    }
    return (
        <>
        <div className="col-8">
        <h1>Hello, World from the Sign Up Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' id='username' className="form-control" value = {formData.username}onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' className="form-control" id='password' value={formData.password} onChange={handleChange} />
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name='firstName' id='firstName' className="form-control" value = {formData.firstName}onChange={handleChange} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name='lastName' id='lastName' className="form-control" value = {formData.lastName}onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' id='email' className="form-control" value = {formData.email}onChange={handleChange} />
            <button className="form-control btn btn-outline-info">Login</button>
        </form>
        </div>
        </>
    )
}

export default SignUpForm