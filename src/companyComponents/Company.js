import {Link} from "react-router-dom"

const Company = (props) => {
    const {handle, numEmployees, name, logoUrl, description, jobs} = props.company;
    return (
        <>
        <ul>
            <li>{<Link to={`/companies/${handle}`}>{name}</Link>}</li>
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
        )): null}
        </>
    )
}

export default Company