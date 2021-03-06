import {useState, useRef} from "react"
const JobSearchForm = ({search}) => {
    const checkboxRef = useRef()
    const INITIAL_STATE = {minSalary: 0, title:''}
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
        formData.hasEquity = checkboxRef.current.checked
        search(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="col-3 mt-3 border border-3 container">
            <div className="card">
                <div className="card-body">

                    <form className="form-control" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="minSalary">Minimum Salary:</label>
                        <input type ="number" className="form-control" name="minSalary" id="minSalary" value={formData.minSalary} onChange={handleChange} />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="hasEquity">Has Equity:</label>
                        <input type ="checkbox" name="hasEquity" id="hasEquity" value={true} ref={checkboxRef}onChange={handleChange} />
                    </div>
                        <p>
                        <label htmlFor="title">Job Title:</label>
                        <input type ="text" className="form-control" name="title" id="title"  onChange={handleChange} />
                        </p>
                        <button className ="btn btn-outline-success form-control">Submit</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default JobSearchForm