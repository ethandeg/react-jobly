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
        <div className="container" style={{textAlign: "center"}}>
        <h1 className="my-5 display-1 text-info" style={{display:"block"}}>Sign Up</h1>
        <div className = "col-md-6 col-lg-4 container" style={{fontWeight: 600}}>
        <div className="card">
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={handleChange} value={formData.username} className="form-control" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type = "password" name="password" id="password" value={formData.password} onChange={handleChange} className="form-control"/>
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
        </div>
    )
}

export default SignUpForm