import {useState} from "react"
const LoginForm = () => {
    const INITIAL_STATE = {username: '', password:''}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    return (
        <>
        <h1>Hello, World from the login form</h1>
        <form className = "form-control">
            <label htmlFor="username">Username:</label>
            <input className = "form-control" type="text" name='username' id='username' value = {formData.username}onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input className = "form-control" type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
            <button>Login</button>
        </form>
        </>
    )
}

export default LoginForm