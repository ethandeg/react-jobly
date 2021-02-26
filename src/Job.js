import {Link} from "react-router-dom"
const Job = ({job}) => {
    //id, title, salary, equity, companyHandle, companyName
    return (
        <ul>
            <li>{job.id}</li>
            <li>{job.title}</li>
            <li>{job.salary}</li>
            <li>{job.equity}</li>
            <li>{job.companyHandle}</li>
            <li>{job.companyName}</li>
            
        </ul>
    )
}

export default Job