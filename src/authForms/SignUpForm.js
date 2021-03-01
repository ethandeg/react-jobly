import {useState} from "react"
const SignUpForm = () => {
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
        <h1>Hello, World from the Sign Up Form</h1>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' id='username' value = {formData.username}onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
            <button>Login</button>
        </form>
        </>
    )
}

export default SignUpForm