import {Link} from "react-router-dom"

const Company = (props) => {
    const {handle, numEmployees, name, logoUrl, description, jobs} = props.company;
    return (
        <>
        <div className = "container my-5">
        <div className="card">
            <div className="card-header">
                {<Link style={{textDecoration: "none"}} className="text-info" to={`/companies/${handle}`}>See Jobs</Link>}
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}
                    <img src={logoUrl} className="float-right ml-5" />
                 </h5>
                <p className="card-text">{description}</p>
                {<Link to={`/companies/${handle}`} className="btn btn-primary">See Jobs</Link>}
             </div>
        </div>
        </div>
        {/* <ul>
            <li></li>
            <li>{numEmployees}</li>
            <li>{logoUrl}</li>
            <li>{description}</li>
        </ul>
        {jobs ? jobs.map(job => (
            <div>
            <p>{<Link to={`/jobs/${job.id}`}>{job.title}</Link>}</p>
            <p>{job.salary}</p>
            <p>{job.equity}</p>
            </div>
        )): null} */}
        </>
    )
}

export default Company