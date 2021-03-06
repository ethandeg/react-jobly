import {useState, useRef} from "react"

const CompanySearchForm = ({search}) => {
    const INITIAL_STATE = {name: '', minEmployees: 0, maxEmployees: 0}
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
        if(!formData.name) delete formData.name
        search(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="col-3 mt-4" style={{marginLeft: "37.5%", marginRight: "37.5%"}}>
            <div className="card">
                <div className="card-body">
                <form className = "form-control" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name">Company Name:</label>
                    <input type='text' className="form-control" name="name" id='name' value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="minEmployees">Minimum Employees:</label>
                    <input type='number' className="form-control" name="minEmployees" id='minEmployees' value={formData.minEmployees} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="maxEmployees">Maximum Employees:</label>
                    <input type='number' className="form-control" name="maxEmployees" id='maxEmployees' value={formData.maxEmployees} onChange={handleChange} />
                    </div>
                    <button className="btn btn-outline-primary mt-2">Submit</button>
                </form>
                </div>
            </div>

        </div>
    )
}

export default CompanySearchForm
