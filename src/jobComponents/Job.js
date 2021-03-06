import {Link} from "react-router-dom"
import {useContext, useState, useEffect} from "react"
import UserContext from "../context/UserContext"
import JoblyApi from "../API"
const Job = ({job}) => {
        const {applyToJob, hasAppliedToJob, currentUser, applications, setApplications} = useContext(UserContext)
      

        let btnText = applications.has(job.id) ? null : "Apply"
        /** Apply for a job */
        async function handleApply() {
          if (hasAppliedToJob(job.id)) return;
          let res = applyToJob(job.id);
          setApplications(new Set([...applications, job.id]))
          btnText = btnText = "Apply" ? null : "Apply"
        }
      
    //id, title, salary, equity, companyHandle, companyName from get all, job.company.name and job.company.handle from get one
    let companyName = job.companyName ? job.companyName : job.company.name
    
    let companyHandle = job.companyHandle ? job.companyHandle : job.company.handle

    return (
        <div className="col-9 my-5">
        <div className="card border border-5" style={{display: "inline-block", width: '80%'}}>
     
            <div className="card-body">
                <h5 className="card-title">{<Link to={`/jobs/${job.id}`}>{job.title}</Link>}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.salary}</h6>
                <p className='card-text'>Equity: {job.equity}</p>
                {<Link to={`/companies/${companyHandle}`} className="btn btn-primary mx-3">{companyName}</Link>}
                {btnText ? <button className="btn btn-outline-info" onClick={handleApply}>{btnText}</button>: <button className = "btn btn-secondary" disabled>Applied</button>}
                
            </div>
        </div>
        </div>

    )

}

export default Job