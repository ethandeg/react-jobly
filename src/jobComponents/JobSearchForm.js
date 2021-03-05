import {useState} from "react"
const JobSearchForm = ({search}) => {
    const INITIAL_STATE = {minSalary: 0, hasEquity: false, title:''}
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
        if(!formData.title) delete formData.title
        search(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="col-3">
            <form className="form-control" onSubmit={handleSubmit}>
                <label htmlFor="minSalary">Minimum Salary:</label>
                <input type ="number" className="form-control" name="minSalary" id="minSalary" value={formData.minSalary} onChange={handleChange} />
                <label htmlFor="hasEquity">Has Equity:</label>
                <input type ="checkbox" name="hasEquity" id="hasEquity" value={formData.hasEquity} onChange={handleChange} />
                <p>
                <label htmlFor="title">Job Title:</label>
                <input type ="text" className="form-control" name="title" id="title" value={formData.title} onChange={handleChange} />
                </p>
                <button className ="btn btn-outline-success form-control">Submit</button>
            </form>
        </div>
    )
}

export default JobSearchForm