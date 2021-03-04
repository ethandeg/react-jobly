import {Link} from "react-router-dom"
const Job = ({job}) => {
    //id, title, salary, equity, companyHandle, companyName from get all, job.company.name and job.company.handle from get one
    let companyName = job.companyName ? job.companyName : job.company.name
    let companyHandle = job.companyHandle ? job.companyHandle : job.company.handle
    return (

        <div className="card m-3" style={{width: "25rem", display: "inline-block"}}>
     
            <div className="card-body">
                <h5 className="card-title">{<Link to={`/jobs/${job.id}`}>{job.title}</Link>}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.salary}</h6>
                <p className='card-text'>Equity: {job.equity}</p>
                {<Link to={`/jobs/${job.id}`} className="btn btn-primary mx-2">Apply for this job</Link>}
                {<Link to={`/companies/${companyHandle}`} className="btn btn-primary">{companyName}</Link>}
            </div>
        </div>

    )

}

export default Job