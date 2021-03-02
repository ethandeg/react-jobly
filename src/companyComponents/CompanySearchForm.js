import {useState} from "react"

const CompanySearchForm = ({search}) => {
    const INITIAL_STATE = {name: '', minEmployees: '', maxEmployees: ''}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        search(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="col-3" style={{marginLeft: "37.5%", marginRight: "37.5%"}}>
        <form className = "form-control" onSubmit={handleSubmit}>
            <label htmlFor="name">Company Name:</label>
            <input type='text' className="form-control" name="name" id='name' value={formData.name} onChange={handleChange} />
            <label htmlFor="minEmployees">Minimum Employees:</label>
            <input type='number' className="form-control" name="minEmployees" id='minEmployees' value={formData.minEmployees} onChange={handleChange} />
            <label htmlFor="maxEmployees">Maximum Employees:</label>
            <input type='number' className="form-control" name="maxEmployees" id='maxEmployees' value={formData.maxEmployees} onChange={handleChange} />
            <button className="btn btn-outline-primary">Submit</button>
        </form>
        </div>
    )
}

export default CompanySearchForm
