import {Link} from "react-router-dom"
const Job = ({job}) => {
    //id, title, salary, equity, companyHandle, companyName from get all, job.company.name and job.company.handle from get one
    let companyName = job.companyName ? job.companyName : job.company.name
    let companyHandle = job.companyHandle ? job.companyHandle : job.company.handle
    return (
        <ul>
            <li>{<Link to={`/jobs/${job.id}`}>{job.id}</Link>}</li>
            <li>{job.title}</li>
            <li>{job.salary}</li>
            <li>{job.equity}</li>
            <li>{<Link to={`/companies/${companyHandle}`}>{companyName}</Link>}</li>
            {/* access company information from job.company */}
        </ul>
    )
}

export default Job